var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                name: true,
                email: true,
                image: true,
                role: true,
                profile: true,
            },
        });
        return user;
    }
};
UsersService = __decorate([
    Injectable(),
    __param(0, Inject('PRISMA')),
    __metadata("design:paramtypes", [PrismaClient])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map