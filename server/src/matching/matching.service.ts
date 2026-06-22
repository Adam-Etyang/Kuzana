import {Inject, BadGatewayException, Injectable } from '@nestjs/common';
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

  async runMatching() {
    // fetch all eligible profiles from DB
    const mentors = await this.prisma.user.findMany({
      where: { role: 'MENTOR' },
      include: {
        profile: {
          include: { skills: true, interests: true, availability: true }
        },
        mentorProfile: true,
      }
    });

    const mentees = await this.prisma.user.findMany({
      where: { role: 'MENTEE' },
      include: {
        profile: {
          include: { skills: true, interests: true, availability: true }
        }
      }
    });

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
      }))
    });

    return data;
  }
}
