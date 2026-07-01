import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { AllowAnonymous, AuthGuard } from '@thallesp/nestjs-better-auth';
import { MatchingService } from './matching.service.js';
import { InternalGuard } from './lib/InternalGuard.js';
import { auth } from '@/lib/auth.js';

@Controller('matching')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('score')
  @UseGuards(InternalGuard)
  async scorePair(
    @Body() body: { targetUserId: string; viewerUserId: string },
  ) {
    return this.matchingService.scorePair(body.targetUserId, body.viewerUserId);
  }

  @AllowAnonymous()
  @Post('run')
  async runMatching() {
    return this.matchingService.runMatching();
  }

  @Get('matches')
  @UseGuards(AuthGuard)
  async getMatches(@Req() req: any) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    return this.matchingService.getMatchesForUser(session.user.id);
  }

  @Get('recommendations')
  @UseGuards(AuthGuard)
  async getRecommendations(@Req() req: any) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    return this.matchingService.getRecommendationsForUser(session.user.id);
  }
}
