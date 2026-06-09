import { Controller, Body, Post, Get, Req } from '@nestjs/common';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import {auth} from '../../lib/auth.js'

@AllowAnonymous()
@Controller('users')
export class UsersController {

  @Post('register')
  async register(@Body() body:{ email: string; password: string; name: string }) {
  const data = await auth.api.signUpEmail({
    body:{ email: body.email, password: body.password, name: body.name },
    asResponse:true
    });
    return data;
  }

  @Post('login')
  async login(@Body() body:{ email: string; password: string }) {
  const data = await auth.api.signInEmail({
    body:{email:body.email, password: body.password},
    asResponse:true,
  });
  return data;
  }

  @Get('me')
  async me(@Req() req: any) {
    const session = await auth.api.getSession({
      headers: req.headers,
      asResponse: true,
    });
    return session;
  }

/*
  @Get('profile')
  async getProfile(@Req() req) {
    const user = await auth.api.getUser({
      req,
      asResponse:true,
    });
    return user;
  }
  */

  


}
