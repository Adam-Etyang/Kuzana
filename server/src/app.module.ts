import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from '../lib/auth.js'; 
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [
    AuthModule.forRoot({ auth }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
