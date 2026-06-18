import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class MatchingService {
  private readonly baseUrl = process.env.PYTHON_SCORING_URL ?? 'http://localhost:8000';
  private readonly internalKey = process.env.INTERNAL_API_KEY;

  private get headers() {
    return {
      'content-type': 'application/json',
      ...(this.internalKey && { 'x-internal-secret': this.internalKey }),
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
    if (!response.ok) {
      throw new BadGatewayException('Scoring service unavailable');
    }
    return response.json();
  }

  async runMatching(mentees: any[], mentors: any[]) {
    const response = await fetch(`${this.baseUrl}/matching/run`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        ...(this.internalKey && { 'x-internal-secret': this.internalKey }),
      },
      body: JSON.stringify({ mentees, mentors }),
    });
    if (!response.ok) {
      throw new BadGatewayException('Matching service unavailable');
    }
    return response.json();
  }
}
