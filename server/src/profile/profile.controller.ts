import {
  UseGuards,
  Controller,
  Body,
  Get,
  Post,
  Put,
  Param,
  Req,
} from '@nestjs/common';

import { AuthGuard } from '@thallesp/nestjs-better-auth';
import { InternalGuard } from './lib/InternalGuard.js';
import { ProfileService } from './profile.service.js';
import { CreateProfileDto } from './DTO/create-profile.dto.js';
import { UpdateProfileDto } from './DTO/update-profile.dto.js';

@Controller('profile')
@UseGuards(AuthGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  //submit profile endpoint
  @Post('submit')
  async submitProfile(@Req() req: any, @Body() body: any) {
    return this.profileService.submitProfile(req.user.id, body);
  }

  //update profile endpoint
  @Put('update/:id')
  async updateProfile(@Param('id') id: string, @Body() body: UpdateProfileDto) {
    return await this.profileService.updateProfile(id, body);
  }

  //get profile endpoint
  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return await this.profileService.getProfile(id);
  }
}

@Controller('/profile/internal')
@UseGuards(InternalGuard)
export class InternalProfileController {
  constructor(private readonly profileService: ProfileService) {}

  //internal scoring service getting the profiles
  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return await this.profileService.getProfile(id);
  }
}
