import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  PrismaClient,
  DayOfWeek,
  Role,
} from '@/generated/prisma/client.js';
import { MatchingService } from '../matching/matching.service.js';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('PRISMA') private prisma: PrismaClient,
    private readonly matchingService: MatchingService,
  ) {}

  async submitProfile(
    userId: string,
    data: {
      firstName: string;
      lastName: string;
      yearOfStudy: number;
      faculty: string;
      department: string;
      goalStatement: string;
      skills: string[];
      interests: string[];
      availability: {
        dayOfWeek: DayOfWeek;
        startTime: string;
        endTime: string;
      }[];
      role: Role;
      bio?: string;
      maxMentees?: number;
    },
  ) {
    // Validate mentor requirements BEFORE touching the DB
    if (data.role === Role.MENTOR && !data.bio) {
      throw new BadRequestException('Bio is required for mentors');
    }

    const existing = await this.prisma.profile.findUnique({
      where: { userId },
    });
    if (existing) throw new ConflictException('Profile already exists');

    return this.prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data: { role: data.role },
      });

      // 1. Upsert skills by NAME (not ID) and capture their real UUIDs
      const skills = await Promise.all(
        data.skills.map((skillName) =>
          tx.skill.upsert({
            where: { name: skillName },
            update: {},
            create: { name: skillName }, // id auto-generates as UUID
          }),
        ),
      );

      // 2. Upsert interests by NAME and capture their real UUIDs
      const interests = await Promise.all(
        data.interests.map((interestName) =>
          tx.interest.upsert({
            where: { name: interestName },
            update: {},
            create: { name: interestName },
          }),
        ),
      );

      // 3. Create profile using the ACTUAL UUIDs from the upserts
      const profile = await tx.profile.create({
        data: {
          userId,
          firstName: data.firstName,
          lastName: data.lastName,
          yearOfStudy: data.yearOfStudy,
          faculty: data.faculty,
          department: data.department,
          goalStatement: data.goalStatement,
          goalVector: [],
          skills: {
            create: skills.map((skill) => ({ skillId: skill.id })),
          },
          interests: {
            create: interests.map((interest) => ({ interestId: interest.id })),
          },
          availability: {
            create: data.availability,
          },
          ...(data.role === Role.MENTOR && {
            bio: data.bio,
            maxMentees: data.maxMentees ?? 2,
          }),
        },
        include: {
          skills: { include: { skill: true } },
          interests: { include: { interest: true } },
          availability: true,
        },
      });

      // Re-run matching so the new profile gets matched immediately.
      // Fire-and-forget: don't block the profile response on the Python service.
      this.matchingService.runMatching().catch((err) => {
        console.error('Post-profile matching run failed:', err);
      });

      return profile;
    });
  }

  async updateProfile(
    userId: string,
    data: Partial<{
      firstName: string;
      lastName: string;
      yearOfStudy: number;
      faculty: string;
      department: string;
      goalStatement: string;
      skills: string[];
      interests: string[];
      availability: {
        dayOfWeek: DayOfWeek;
        startTime: string;
        endTime: string;
      }[];
    }>,
  ) {
    const existing = await this.prisma.profile.findUnique({
      where: { userId },
    });
    if (!existing) throw new NotFoundException('Profile not found');

    // Upsert skills by name and get real IDs (outside transaction for simplicity,
    // or wrap everything in $transaction if you need strict atomicity)
    let skillIds: string[] | undefined;
    if (data.skills) {
      const skills = await Promise.all(
        data.skills.map((skillName) =>
          this.prisma.skill.upsert({
            where: { name: skillName },
            update: {},
            create: { name: skillName },
          }),
        ),
      );
      skillIds = skills.map((s) => s.id);
    }

    let interestIds: string[] | undefined;
    if (data.interests) {
      const interests = await Promise.all(
        data.interests.map((interestName) =>
          this.prisma.interest.upsert({
            where: { name: interestName },
            update: {},
            create: { name: interestName },
          }),
        ),
      );
      interestIds = interests.map((i) => i.id);
    }

    return this.prisma.profile.update({
      where: { userId },
      data: {
        ...(data.firstName && { firstName: data.firstName }),
        ...(data.lastName && { lastName: data.lastName }),
        ...(data.yearOfStudy && { yearOfStudy: data.yearOfStudy }),
        ...(data.faculty && { faculty: data.faculty }),
        ...(data.department && { department: data.department }),
        ...(data.goalStatement && {
          goalStatement: data.goalStatement,
          goalVector: [],
        }),
        ...(skillIds && {
          skills: {
            deleteMany: {},
            create: skillIds.map((skillId) => ({ skillId })),
          },
        }),
        ...(interestIds && {
          interests: {
            deleteMany: {},
            create: interestIds.map((interestId) => ({ interestId })),
          },
        }),
        ...(data.availability && {
          availability: {
            deleteMany: {},
            create: data.availability,
          },
        }),
      },
      include: {
        skills: { include: { skill: true } },
        interests: { include: { interest: true } },
        availability: true,
      },
    });
  }

  async getProfile(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: {
        id: true,
        userId: true,
        firstName: true,
        lastName: true,
        yearOfStudy: true,
        faculty: true,
        department: true,
        goalStatement: true,
        goalVector: true,
        createdAt: true,
        updatedAt: true,
        bio: true,
        maxMentees: true,
        currentMentees: true,
        isAvailable: true,
        skills: { include: { skill: true } },
        interests: { include: { interest: true } },
        availability: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
          },
        },
      },
    });

    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }
}
