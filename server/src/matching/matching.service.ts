import {Inject, BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class MatchingService {

  private readonly baseUrl = process.env.PYTHON_SCORING_URL ?? 'http://localhost:8000';
  private readonly internalKey = process.env.INTERNAL_API_KEY;

  constructor(@Inject('PRISMA') private readonly prisma: PrismaClient){}

  private get headers() {
    return {
      'content-type': 'application/json',
      'x-internal-secret': this.internalKey,
    };
  }

  async scorePair(targetUserId: string, viewerUserId: string) {
    const response = await fetch(`${this.baseUrl}/scoring/compatibility`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        ...(this.internalKey && { 'x-internal-secret': this.internalKey }),

      },
      body: JSON.stringify({ targetUserId, viewerUserId }),
    });
    if (!response.ok) throw new BadGatewayException('Scoring service unavailable');
    return response.json();
  }

  async getMatchesForUser(userId: string) {
    const matches = await this.prisma.match.findMany({
      where: {
        OR: [{ menteeId: userId }, { mentorId: userId }],
      },
      include: {
        mentee: {
          select: {
            id: true,
            name: true,
            email: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                faculty: true,
                department: true,
                yearOfStudy: true,
                bio: true,
                skills: { include: { skill: true } },
                interests: { include: { interest: true } },
              },
            },
          },
        },
        mentor: {
          select: {
            id: true,
            name: true,
            email: true,
            profile: {
              select: {
                firstName: true,
                lastName: true,
                faculty: true,
                department: true,
                bio: true,
                skills: { include: { skill: true } },
                interests: { include: { interest: true } },
                availability: true,
              },
            },
          },
        },
      },
      orderBy: { matchedAt: 'desc' },
    });

    const scores = await this.prisma.compatibilityScore.findMany({
      where: {
        OR: [{ menteeId: userId }, { mentorId: userId }],
      },
    });

    const scoreMap = new Map<string, number>();
    for (const s of scores) {
      const key = `${s.menteeId}-${s.mentorId}`;
      scoreMap.set(key, s.totalScore);
    }

    return matches.map((m) => ({
      ...m,
      compatibilityScore: scoreMap.get(`${m.menteeId}-${m.mentorId}`) ?? null,
    }));
  }

  async getRecommendationsForUser(userId: string, limit = 5) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const scores = await this.prisma.compatibilityScore.findMany({
      where: { menteeId: userId },
      orderBy: { totalScore: 'desc' },
      take: limit,
    });

    if (scores.length === 0) {
      const availableMentors = await this.prisma.user.findMany({
        where: {
          role: 'MENTOR',
          profile: {isAvailable: true },
        },
        include: {
          profile: {
            select: {
              firstName: true,
              lastName: true,
              faculty: true,
              department: true,
              bio: true,
              skills: { include: { skill: true } },
              interests: { include: { interest: true } },
            },
          },
        },
        take: limit,
      });
      return availableMentors.map((mentor) => ({
        mentor,
        compatibilityScore: null,
      }));
    }

    const mentorIds = scores.map((s) => s.mentorId);
    const mentors = await this.prisma.user.findMany({
      where: { id: { in: mentorIds } },
      include: {
        profile: {
          select: {
            firstName: true,
            lastName: true,
            faculty: true,
            department: true,
            bio: true,
            skills: { include: { skill: true } },
            interests: { include: { interest: true } },
            isAvailable: true,
            maxMentees: true,
            currentMentees: true,
          },
        },
      },
    });

    const mentorMap = new Map(mentors.map((m) => [m.id, m]));
    return scores
      .map((s) => {
        const mentor = mentorMap.get(s.mentorId);
        if (!mentor) return null;
        return {
          mentor,
          compatibilityScore: s.totalScore,
          skillScore: s.skillScore,
          interestScore: s.interestScore,
          goalScore: s.goalScore,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null);
  }

  async runMatching() {
    //Debug
    const profile_count = await this.prisma.profile.count();
    console.log(`Total profiles in DB: ${profile_count}`);

    const mentorWithProfile = await this.prisma.user.findFirst({
  where: { role: 'MENTOR', profile: { isNot: null } },
  include: {
    profile: {
      include: {
        skills: { include: { skill: true } },
        interests: { include: { interest: true } },
        availability: true,
      }
    }
  }
});

const menteeWithProfile = await this.prisma.user.findFirst({
  where: { role: 'MENTEE', profile: { isNot: null } },
  include: {
    profile: {
      include: {
        skills: { include: { skill: true } },
        interests: { include: { interest: true } },
        availability: true,
      }
    }
  }
});

console.log('Mentee with profile:', JSON.stringify(menteeWithProfile, null, 2));
console.log('Mentor with profile:', JSON.stringify(mentorWithProfile, null, 2));

    // fetch all eligible profiles from DB
    const mentorsRaw = await this.prisma.user.findMany({
      where: { role: 'MENTOR', profile: { isNot: null } },
      include: {
        profile: {
          include: {
            skills: { include: { skill: true } },
            interests: { include: { interest: true } },
            availability: true,
          }
        },
      }
    });

    const menteesRaw = await this.prisma.user.findMany({
      where: { role: 'MENTEE', profile: { isNot: null } },
      include: {
        profile: {
          include: {
            skills: { include: { skill: true } },
            interests: { include: { interest: true } },
            availability: true,
          }
        }
      }
    });
    console.log('Raw mentor 0:', JSON.stringify(mentorsRaw[0], null, 2));
    console.log('Profile exists:', !!mentorsRaw[0]?.profile);
    console.log('Profile skills:', mentorsRaw[0]?.profile?.skills);
    console.log('Profile interests:', mentorsRaw[0]?.profile?.interests);

    const flattenUser = (user: any) => ({
    id: user.id,
    email: user.email,
    role: user.role,
    // Flatten profile fields
    skills: user.profile?.skills ?? [],
    interests: user.profile?.interests ?? [],
    availability: user.profile?.availability ?? [],
    goalVector: user.profile?.goalVector ?? [],
    yearOfStudy: user.profile?.yearOfStudy ?? 0,
    // Mentor-specific fields now live directly on Profile
    bio: user.profile?.bio ?? null,
    maxMentees: user.profile?.maxMentees ?? 31,
    currentMentees: user.profile?.currentMentees ?? 0,
    isAvailable: user.profile?.isAvailable ?? true,
  });

  const mentees = menteesRaw.map(flattenUser);
  const mentors = mentorsRaw.map(flattenUser);

    // call FastAPI matching service
    const response = await fetch(`${this.baseUrl}/matching/run`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        ...(this.internalKey && { 'x-internal-secret': this.internalKey }),

      },
      body: JSON.stringify({ mentors, mentees }),
    });
    if (!response.ok) throw new BadGatewayException('Matching service unavailable');
    const data = await response.json();

    // save matches to DB
    const matches: [string, string][] = data.matches;
    await this.prisma.match.createMany({
      data: matches.map(([menteeId, mentorId]) => ({
        menteeId,
        mentorId,
        status: 'COMPLETED',
      })),
      skipDuplicates: true,
    });

    return data;
  }
}
