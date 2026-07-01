import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { AllowAnonymous, AuthGuard } from '@thallesp/nestjs-better-auth';
import { auth } from '@/lib/auth.js';
import { ApplicationsService } from './applications.service.js';
import {
  CreateApplicationDto,
  ValidateAccessKeyDto,
} from './DTO/create-application.dto.js';

@Controller('applications')
@UseGuards(AuthGuard)
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @AllowAnonymous()
  async submitApplication(@Body() body: CreateApplicationDto) {
    return this.applicationsService.submitApplication(body);
  }

  @Post('validate-key')
  @AllowAnonymous()
  async validateAccessKey(@Body() body: ValidateAccessKeyDto) {
    return this.applicationsService.validateAccessKey(body);
  }

  @Get()
  async getApplications() {
    return this.applicationsService.getApplications();
  }

  @Get('pending')
  async getPendingApplications() {
    return this.applicationsService.getPendingApplications();
  }

  @Get(':id')
  async getApplicationById(@Param('id') id: string) {
    return this.applicationsService.getApplicationById(id);
  }

  @Post(':id/approve')
  async approveApplication(@Param('id') id: string, @Req() req: any) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    return this.applicationsService.approveApplication(id, session.user.id);
  }

  @Post(':id/reject')
  async rejectApplication(@Param('id') id: string, @Req() req: any) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    return this.applicationsService.rejectApplication(id, session.user.id);
  }
}
