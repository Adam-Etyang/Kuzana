import { Module } from '@nestjs/common';
import { RequestsController } from './requests.controller.js';
import { RequestsService } from './requests.service.js';
import { prisma } from '../../lib/prisma.js';

@Module({
  controllers: [RequestsController],
  providers: [
    RequestsService,
    {
      provide: 'PRISMA',
      useValue: prisma,
    },
  ],
})
export class RequestsModule {}
