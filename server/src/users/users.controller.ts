import { Controller, Body, Post, Get, Req } from '@nestjs/common';
import {auth} from '../../lib/auth.js'

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
