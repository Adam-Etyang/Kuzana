import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
//import { prisma } from '../../lib/prisma.js';
import { CreateMessageDto } from './messaging.DTO';

@Injectable()
export class MessagingService {
  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}

  async create(data: CreateMessageDto) {
    const message = await this.prisma.message.create({
      data:{
        content : data.content,
        senderId: data.senderId,
        conversationId : data.conversationId,
},
      include:{
        sender:{
          select:{
            id: true,
            name: true,
          },
        },
        conversation:{
          select:{
            id:true,
          },
        },
      },
    });
    return message
  }

  async getMessages(
    conversationId: string,
    before?: string,
    limit: string = '50',
  ) {
      const where:any = {conversationId};
      if(before){
        where.createdAt = {lt: new Date(before)};
      }
      const message = await this.prisma.message.findMany({
        where,
        orderBy:{
          createdAt: 'desc',
        },
        take: parseInt(limit,10),
        include:{
          sender:{
            select:{
              id:true,
              name:true
            },
          },
        },
      });
      return message
    }
}
