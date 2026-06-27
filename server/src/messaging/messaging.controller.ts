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
import {AuthGuard} from '@thallesp/nestjs-better-auth';
import { MessagingService } from './messaging.service';


@Controller('messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  //send message endpoint
  @Post('send')
  async sendMessage(@Req() req: any, @Body() body: any) {
    return this.messagingService.sendMessage(req.user.id, body);
  }

  //get messages endpoint
  @Get('get/:id')
  async getMessages(@Param('id') id:string){
    return await this.messagingService.getMessages(id);
  }

}
