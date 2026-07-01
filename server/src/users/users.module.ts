import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { prisma } from '@/lib/prisma.js';
import { ApplicationsModule } from '../applications/applications.module.js';

@Module({
  imports: [ApplicationsModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'PRISMA',
      useValue: prisma,
    },
  ],
})
export class UsersModule {}
