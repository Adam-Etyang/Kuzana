import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller.js';
import { ProfileService } from './profile.service.js';
import { MatchingModule } from '../matching/matching.module.js';
import { prisma } from '../../lib/prisma.js';

@Module({
  imports: [MatchingModule],
  controllers: [ProfileController],
  providers: [
    ProfileService,
    {
      provide: 'PRISMA',
      useValue: prisma,
    },
  ],
})
export class ProfileModule {}
