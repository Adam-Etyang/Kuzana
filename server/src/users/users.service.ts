import {
  Injectable,
  Inject,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { APIError } from 'better-auth';
import { PrismaClient } from '@/generated/prisma/client.js';
import { auth } from '@/lib/auth.js';
import { ApplicationsService } from '../applications/applications.service.js';
import { RegisterMentorDto } from './DTO/register-mentor.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PRISMA') private prisma: PrismaClient,
    private readonly applicationsService: ApplicationsService,
  ) {}

  async getAvailableMentors() {
    return this.prisma.user.findMany({
      where: {
        role: 'MENTOR',
        profile: { isAvailable: true },
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        profile: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            faculty: true,
            department: true,
            bio: true,
            maxMentees: true,
            currentMentees: true,
            isAvailable: true,
            skills: { include: { skill: true } },
            interests: { include: { interest: true } },
            availability: true,
          },
        },
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        banned: true,
        emailVerified: true,
        createdAt: true,
        profile: { select: { firstName: true, lastName: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAdminStats() {
    const [
      students,
      mentors,
      pending,
      pendingVerifications,
      recentUsers,
      recentMatches,
    ] = await Promise.all([
      this.prisma.user.count({ where: { role: 'MENTEE' } }),
      this.prisma.user.count({ where: { role: 'MENTOR' } }),
      this.prisma.mentorshipRequest.count({ where: { status: 'PENDING' } }),
      this.prisma.user.findMany({
        where: { role: 'MENTOR', profile: { is: null } },
        select: { id: true, name: true, email: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      this.prisma.user.findMany({
        select: { id: true, name: true, role: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      this.prisma.match.findMany({
        include: {
          mentee: { select: { name: true } },
          mentor: { select: { name: true } },
        },
        orderBy: { matchedAt: 'desc' },
        take: 3,
      }),
    ]);

    return {
      counts: {
        students,
        mentors,
        pending,
        reports: 0,
      },
      pendingVerifications,
      recentUsers,
      recentMatches: recentMatches.map((m) => ({
        id: m.id,
        menteeName: m.mentee.name,
        mentorName: m.mentor.name,
        matchedAt: m.matchedAt,
      })),
    };
  }

  async registerMentor(dto: RegisterMentorDto) {
    const { valid, message } = await this.applicationsService.validateAccessKey(
      {
        key: dto.accessKey,
        email: dto.email,
      },
    );
    if (!valid) throw new BadRequestException(message);

    try {
      await auth.api.signUpEmail({
        body: {
          email: dto.email,
          password: dto.password,
          name: dto.name,
          role: 'MENTOR',
          callbackURL:
            dto.callbackURL ?? 'http://localhost:3000/mentor/onboarding',
        },
      });
    } catch (err) {
      if (err instanceof APIError) {
        if (err.statusCode === 409) {
          throw new ConflictException('A user with this email already exists.');
        }
        throw new BadRequestException(
          (err.body as { message?: string })?.message ?? 'Sign up failed.',
        );
      }
      throw err;
    }

    await this.applicationsService.consumeAccessKey(dto.accessKey, dto.email);

    return { success: true, message: 'Mentor account created.' };
  }
}
