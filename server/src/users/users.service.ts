import { Injectable,Inject } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js'

@Injectable()
export class UsersService {

  constructor(@Inject('PRISMA') private prisma: PrismaClient) {}
  
/*
  async getUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {  // use 'select' not 'include' for scalar fields
        name: true,
        email: true,
        image: true,
        role: true,
        profile: true,
      },
    });
    return user;  // actually return the user!
  }
  */
}
