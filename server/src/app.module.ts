import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '../lib/auth.js'; 
import {prisma} from '../lib/prisma.js';
import { UsersModule } from './users/users.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { MatchingModule } from './matching/matching.module.js';
import { MessagingModule } from './messaging/messaging.module.js';

@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    UsersModule,
    ProfileModule,
    MatchingModule,
    MessagingModule,
  ],
  controllers: [AppController],
  providers: [AppService,{provide: 'PRISMA', useValue: prisma,}],

})
export class AppModule {}
