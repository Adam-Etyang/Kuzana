import { UseGuards, Controller, Get, Post, Put, Body, Param, Req, Query, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@thallesp/nestjs-better-auth';
import { auth } from '../../lib/auth.js';
import { RequestsService } from './requests.service.js';

@Controller('requests')
@UseGuards(AuthGuard)
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  async getRequests(@Req() req: any, @Query('role') role?: string) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    const userRole = role === 'MENTOR' ? 'MENTOR' : 'MENTEE';
    return this.requestsService.getRequests(session.user.id, userRole);
  }

  @Get('counts')
  async getRequestCounts(@Req() req: any, @Query('role') role?: string) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    const userRole = role === 'MENTOR' ? 'MENTOR' : 'MENTEE';
    return this.requestsService.getRequestCounts(session.user.id, userRole);
  }

  @Get(':id')
  async getRequestById(@Param('id') id: string) {
    return this.requestsService.getRequestById(id);
  }

  @Post()
  async createRequest(
    @Req() req: any,
    @Body() body: { mentorId: string; message?: string },
  ) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) throw new NotFoundException('No session');
    return this.requestsService.createRequest(session.user.id, body.mentorId, body.message);
  }

  @Put(':id')
  async updateRequestStatus(
    @Param('id') id: string,
    @Body() body: { status: 'ACCEPTED' | 'DECLINED' },
  ) {
    return this.requestsService.updateRequestStatus(id, body.status);
  }
}
