import { Body, Controller, Post } from '@nestjs/common';
import { MatchingService } from './matching.service.js';

@Controller('matching')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('score')
  async scorePair(@Body() body: { targetUserId: string; viewerUserId: string }) {
    return this.matchingService.scorePair(body.targetUserId, body.viewerUserId);
  }
  @Post('run')
  async runMatching(@Body() body: { mentees: any[]; mentors: any[] }) {
    return this.matchingService.runMatching(body.mentees, body.mentors);
  }

}
