import { Controller, Body, Post, Get, Req,Param } from '@nestjs/common';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { auth } from '../../lib/auth.js';
import { UsersService } from './users.service.js';

@AllowAnonymous()
@Controller('users')
export class UsersController {
  // Inject the service via constructor
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; name: string; role: "MENTEE" | "MENTOR" | "ADMIN" }) {
    const data = await auth.api.signUpEmail({
      body: {
        email: body.email,
        password: body.password,
        name: body.name,
        role: body.role,
      },
      asResponse: true,
    });
    return data;
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const data = await auth.api.signInEmail({
      body: { email: body.email, password: body.password },
      asResponse: true,
    });
    return data;
  }

  @Get('user')
  async getUser(@Param('id') id: string) {  // also need @Query() here
    return await this.usersService.getUser(id)
  }

  @Get('me')
  async me(@Req() req: any) {
    const session = await auth.api.getSession({
      headers: req.headers,
      asResponse: true,
    });
    return session;
  }
}
