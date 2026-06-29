import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';

@Injectable()
export class UsersService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

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
}
