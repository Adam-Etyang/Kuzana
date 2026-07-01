import {
  Controller,
  Body,
  Post,
  Get,
  Req,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AllowAnonymous, AuthGuard } from '@thallesp/nestjs-better-auth';
import { auth } from '@/lib/auth.js';
import { UsersService } from './users.service.js';
import { RegisterMentorDto } from './DTO/register-mentor.dto.js';

@AllowAnonymous()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async me(@Req() req: any) {
    const session = await auth.api.getSession({
      headers: req.headers,
      asResponse: true,
    });
    return session;
  }

  @Post('register-mentor')
  async registerMentor(@Body() body: RegisterMentorDto) {
    return this.usersService.registerMentor(body);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('stats')
  @UseGuards(AuthGuard)
  async getStats() {
    return this.usersService.getAdminStats();
  }

  @Get('mentors')
  @UseGuards(AuthGuard)
  async getMentors() {
    return this.usersService.getAvailableMentors();
  }
}
