import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service.js';
import { MatchingController } from './matching.controller.js';

@Module({
  providers: [MatchingService],
  controllers: [MatchingController]
})
export class MatchingModule {}
