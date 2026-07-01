import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller.js';
import { ApplicationsService } from './applications.service.js';
import { prisma } from '@/lib/prisma.js';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, { provide: 'PRISMA', useValue: prisma }],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
