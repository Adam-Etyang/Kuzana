import { Controller,Get,Param, Query } from '@nestjs/common';
import { MessagingService } from './messaging.service.js';

@Controller('conversations')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Get(':conversationId/messages')
  getMessages( 
  @Param('conversationId') conversationId: string,
  @Query('before') before?: string,  // cursor for pagination
  @Query('limit') limit = '50',){
    return this.messagingService.getMessages(conversationId, before, limit);
  }
}
