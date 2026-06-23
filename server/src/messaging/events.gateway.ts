import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';



@websocketGateway({cors:true})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() 
  server: Server;
  constructor(private chatService: MessagingService) {}

  @SubscribeMessage('sent_message')
  async handleMessage(client:Socket, payload:any, conversationId:string){
    const message = await this.chatService.sendMessage(payload.senderId, payload);
    this.server.to(
     payload.conversationId 
    ).emit('new_message', message);
  }

  @SubscribeMessage('join')
  async handleJoin(client:Socket, conversationId:string){
    client.join(payload.conversationId);
  }

}
