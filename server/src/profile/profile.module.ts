import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller.js';
import { ProfileService } from './profile.service.js';
import {prisma} from '../../lib/prisma.js';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,
    {
      provide: 'PRISMA',
      useValue: prisma,
    }
  ]
})
export class ProfileModule {}
