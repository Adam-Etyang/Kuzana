import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service.js';
import { MatchingController } from './matching.controller.js';
import { prisma } from '../../lib/prisma.js';

@Module({
  providers: [
    MatchingService,
    {
      provide: 'PRISMA',
      useValue: prisma,
    },
  ],
  controllers: [MatchingController],
  exports: [MatchingService],
})
export class MatchingModule {}
