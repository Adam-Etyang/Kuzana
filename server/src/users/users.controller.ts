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

  @Get('mentors')
  @UseGuards(AuthGuard)
  async getMentors() {
    return this.usersService.getAvailableMentors();
  }
}
