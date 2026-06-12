import { BadGatewayException, Injectable } from '@nestjs/common';

@Injectable()
export class MatchingService {
  async scorePair(targetUserId: string, viewerUserId: string) {
    const baseUrl = process.env.PYTHON_SCORING_URL ?? 'http://localhost:8000';
    const response = await fetch(`${baseUrl}/scoring/compatibility`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ targetUserId, viewerUserId }),
    });

    if (!response.ok) {
      throw new BadGatewayException('Scoring service unavailable');
    }

    return response.json();
  }
}
