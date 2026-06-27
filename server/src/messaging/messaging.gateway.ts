// messaging.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagingService } from './messaging.service.js';
import { CreateMessageDto } from './messaging.DTO.js';

@WebSocketGateway({ cors: { origin: '*' } })
export class MessagingGateway {
  @WebSocketServer()
  server!: Server;

  constructor(private messagingService: MessagingService) {}

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody() data: CreateMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messagingService.create(data);
    this.server.to(data.conversationId).emit('newMessage', message);
    return message;
  }

  @SubscribeMessage('joinConversation')
  handleJoinConversation(
    @MessageBody() data: { conversationId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.join(data.conversationId);
    client.emit('joined', { conversationId: data.conversationId });
  }
}
