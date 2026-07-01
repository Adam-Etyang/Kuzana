import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { prisma } from '@/lib/prisma.js';

@Module({
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
