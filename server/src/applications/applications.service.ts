import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaClient } from '@/generated/prisma/client.js';
import { sendEmail } from '@/lib/email.js';
import {
  CreateApplicationDto,
  ValidateAccessKeyDto,
} from './DTO/create-application.dto.js';

const KEY_PREFIX = 'KUZ-MEN-';
const KEY_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateAccessKey(): string {
  const bytes = randomBytes(6);
  let suffix = '';
  for (let i = 0; i < 6; i++) {
    suffix += KEY_CHARS[bytes[i] % KEY_CHARS.length];
  }
  return `${KEY_PREFIX}${suffix}`;
}

@Injectable()
export class ApplicationsService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

  async submitApplication(dto: CreateApplicationDto) {
    const existing = await this.prisma.mentorApplication.findUnique({
      where: { email: dto.email },
      select: { status: true },
    });

    if (existing?.status === 'APPROVED') {
      throw new ConflictException(
        'An approved application already exists for this email. Please use your access key to sign up.',
      );
    }

    return this.prisma.mentorApplication.upsert({
      where: { email: dto.email },
      create: {
        fullName: dto.fullName,
        email: dto.email,
        organization: dto.organization,
        position: dto.position,
        yearsExperience: dto.yearsExperience,
        linkedin: dto.linkedin,
        expertise: dto.expertise,
        motivation: dto.motivation,
        status: 'PENDING',
      },
      update: {
        fullName: dto.fullName,
        organization: dto.organization,
        position: dto.position,
        yearsExperience: dto.yearsExperience,
        linkedin: dto.linkedin,
        expertise: dto.expertise,
        motivation: dto.motivation,
        status: 'PENDING',
      },
    });
  }

  async getApplications() {
    return this.prisma.mentorApplication.findMany({
      orderBy: { createdAt: 'desc' },
      include: { accessKey: { select: { key: true, isUsed: true } } },
    });
  }

  async getPendingApplications() {
    return this.prisma.mentorApplication.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getApplicationById(id: string) {
    const application = await this.prisma.mentorApplication.findUnique({
      where: { id },
      include: { accessKey: true, reviewer: { select: { name: true } } },
    });
    if (!application) throw new NotFoundException('Application not found');
    return application;
  }

  async approveApplication(id: string, reviewerId: string) {
    const application = await this.prisma.mentorApplication.findUnique({
      where: { id },
    });
    if (!application) throw new NotFoundException('Application not found');
    if (application.status !== 'PENDING') {
      throw new BadRequestException(
        `Application is already ${application.status.toLowerCase()}`,
      );
    }

    const key = generateAccessKey();

    const [updated] = await this.prisma.$transaction([
      this.prisma.mentorApplication.update({
        where: { id },
        data: {
          status: 'APPROVED',
          reviewedAt: new Date(),
          reviewerId,
        },
      }),
      this.prisma.mentorAccessKey.create({
        data: { key, applicationId: id, email: application.email },
      }),
    ]);

    await sendEmail({
      to: application.email,
      subject: 'Your Kuzana Mentor Access Key',
      text: `Congratulations! Your mentor application has been approved.\n\nYour access key: ${key}\n\nUse this key to create your mentor account at http://localhost:3000/mentor/signup`,
      html: `<p>Congratulations! Your mentor application has been approved.</p><p>Your access key: <strong>${key}</strong></p><p><a href="http://localhost:3000/mentor/signup">Click here to create your mentor account</a></p>`,
    }).catch((err) => {
      console.error('[applications] Failed to send approval email:', err);
    });

    return { application: updated, accessKey: key };
  }

  async rejectApplication(id: string, reviewerId: string) {
    const application = await this.prisma.mentorApplication.findUnique({
      where: { id },
    });
    if (!application) throw new NotFoundException('Application not found');
    if (application.status !== 'PENDING') {
      throw new BadRequestException(
        `Application is already ${application.status.toLowerCase()}`,
      );
    }

    return this.prisma.mentorApplication.update({
      where: { id },
      data: {
        status: 'REJECTED',
        reviewedAt: new Date(),
        reviewerId,
      },
    });
  }

  async validateAccessKey(dto: ValidateAccessKeyDto) {
    const accessKey = await this.prisma.mentorAccessKey.findUnique({
      where: { key: dto.key },
    });

    if (!accessKey || accessKey.email !== dto.email) {
      return { valid: false, message: 'Invalid access key for this email.' };
    }
    if (accessKey.isUsed) {
      return {
        valid: false,
        message: 'This access key has already been used.',
      };
    }

    return { valid: true, message: 'Access key is valid.' };
  }

  async consumeAccessKey(key: string, email: string) {
    const accessKey = await this.prisma.mentorAccessKey.findUnique({
      where: { key },
    });
    if (!accessKey || accessKey.email !== email) {
      throw new BadRequestException('Invalid access key for this email.');
    }
    if (accessKey.isUsed) {
      throw new BadRequestException('This access key has already been used.');
    }

    return this.prisma.mentorAccessKey.update({
      where: { key },
      data: { isUsed: true, usedAt: new Date() },
    });
  }
}
