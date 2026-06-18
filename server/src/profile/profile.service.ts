import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient,DayOfWeek,Role } from '../../generated/prisma/client.js';


@Injectable()
export class ProfileService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

  async submitProfile(userId: string, data: {
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
}) {
  const existing = await this.prisma.profile.findUnique({ where: { userId } });
  if (existing) throw new ConflictException('Profile already exists');

  return this.prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: userId },
      data: { role: data.role }
    });

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
          create: data.skills.map(skillId => ({ skillId }))
        },
        interests: {
          create: data.interests.map(interestId => ({ interestId }))
        },
        availability: {
          create: data.availability
        }
      },
      include: {
        skills: true,
        interests: true,
        availability: true
      }
    });

    if (data.role === Role.MENTOR) {
      if (!data.bio) throw new BadRequestException('Bio is required for mentors');
      await tx.mentorProfile.create({
        data: {
          userId,
          bio: data.bio,
          maxMentees: data.maxMentees ?? 2,
        }
      });
    }

    return profile;
  });
}

  async updateProfile(userId:string, data:Partial<{
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
  }>){
    const existing = await this.prisma.profile.findUnique({ where: { userId } });
    if (!existing) throw new NotFoundException('Profile not found');

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
          goalVector: []  // reset embedding when goal changes
        }),
        ...(data.skills && {
          skills: {
            deleteMany: {},
            create: data.skills.map(skillId => ({ skillId }))
          }
        }),
        ...(data.interests && {
          interests: {
            deleteMany: {},
            create: data.interests.map(interestId => ({ interestId }))
          }
        }),
        ...(data.availability && {
          availability: {
            deleteMany: {},
            create: data.availability
          }
        }),
      },
      include: { skills: true, interests: true, availability: true }
    })

  }

  async getProfile(userId:string){
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      include: { skills: true, 
        interests: true,
        availability: true,
        user:{ select: { role: true, mentorProfile: true } },
      }
    });

    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }


}
