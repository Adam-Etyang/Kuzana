import { Body, Controller, Post,UseGuards } from '@nestjs/common';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { MatchingService } from './matching.service.js';
import { InternalGuard } from './lib/InternalGuard.js';

@Controller('matching')
@UseGuards(InternalGuard)
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('score')
  async scorePair(@Body() body: { targetUserId: string; viewerUserId: string }) {
    return this.matchingService.scorePair(body.targetUserId, body.viewerUserId);
  }
  
  @AllowAnonymous()
  @Post('run')
  async runMatching() {
    return this.matchingService.runMatching();
  }

}
