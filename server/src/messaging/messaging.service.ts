import {Inject Injectable } from '@nestjs/common';
import {PrismaClient} from '../../generated/PrismaClient.js'

@Injectable()
export class MessagingService {

  constructuor (@Inject ('PRISMA') private readonly prisma:PrismaClient){}

  async createMessages(){
    return this.prisma.message.create({
      data:{
        content: data.content,
        conversationId: data.conversationId,
        senderId:data.senderId
      }
    })
  }
}
