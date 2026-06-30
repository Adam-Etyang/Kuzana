import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller.js';
import { MessagingService } from './messaging.service.js';
import { MessagingGateway } from './messaging.gateway.js';
import { prisma } from '../../lib/prisma.js';

@Module({
  controllers: [MessagingController],
  providers: [
    MessagingService,
    MessagingGateway,
    {
      provide: 'PRISMA',
      useValue: prisma,
    },
  ],
})
export class MessagingModule {}
