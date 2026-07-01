import {
  Inject,
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaClient, RequestStatus } from '@/generated/prisma/client.js';

@Injectable()
export class RequestsService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

  async createRequest(menteeId: string, mentorId: string, message?: string) {
    if (menteeId === mentorId)
      throw new BadRequestException('Cannot send request to yourself');

    const mentor = await this.prisma.user.findUnique({
      where: { id: mentorId },
    });
    if (!mentor || mentor.role !== 'MENTOR')
      throw new BadRequestException('User is not a mentor');

    const existing = await this.prisma.mentorshipRequest.findUnique({
      where: { menteeId_mentorId: { menteeId, mentorId } },
    });
    if (existing)
      throw new ConflictException('Request already sent to this mentor');

    return this.prisma.mentorshipRequest.create({
      data: { menteeId, mentorId, message },
      include: {
        mentee: { select: { id: true, name: true, email: true } },
        mentor: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async getRequests(userId: string, role: 'MENTEE' | 'MENTOR') {
    const where =
      role === 'MENTEE' ? { menteeId: userId } : { mentorId: userId };
    return this.prisma.mentorshipRequest.findMany({
      where,
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
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getRequestById(id: string) {
    const request = await this.prisma.mentorshipRequest.findUnique({
      where: { id },
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
                goalStatement: true,
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
    });
    if (!request) throw new NotFoundException('Request not found');
    return request;
  }

  async updateRequestStatus(id: string, status: RequestStatus) {
    const existing = await this.prisma.mentorshipRequest.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Request not found');
    if (existing.status !== 'PENDING')
      throw new BadRequestException('Request already processed');

    return this.prisma.mentorshipRequest.update({
      where: { id },
      data: { status },
      include: {
        mentee: { select: { id: true, name: true, email: true } },
        mentor: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async getRequestCounts(userId: string, role: 'MENTEE' | 'MENTOR') {
    const where =
      role === 'MENTEE' ? { menteeId: userId } : { mentorId: userId };
    const [pending, accepted, declined] = await Promise.all([
      this.prisma.mentorshipRequest.count({
        where: { ...where, status: 'PENDING' },
      }),
      this.prisma.mentorshipRequest.count({
        where: { ...where, status: 'ACCEPTED' },
      }),
      this.prisma.mentorshipRequest.count({
        where: { ...where, status: 'DECLINED' },
      }),
    ]);
    return {
      pending,
      accepted,
      declined,
      total: pending + accepted + declined,
    };
  }
}
