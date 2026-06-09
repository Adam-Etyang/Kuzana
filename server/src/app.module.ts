import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '../lib/auth.js'; 
import { UsersModule } from './users/users.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { MatchingModule } from './matching/matching.module.js';

@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    UsersModule,
    ProfileModule,
    MatchingModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
