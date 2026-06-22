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
import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Role } from '../../generated/prisma/client.js';
let ProfileService = class ProfileService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async submitProfile(userId, data) {
        const existing = await this.prisma.profile.findUnique({ where: { userId } });
        if (existing)
            throw new ConflictException('Profile already exists');
        return this.prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id: userId },
                data: { role: data.role }
            });
            const profile = await tx.profile.create({
                data: {
                    userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    yearOfStudy: data.yearOfStudy,
                    faculty: data.faculty,
                    department: data.department,
                    goalStatement: data.goalStatement,
                    goalVector: [],
                    skills: {
                        create: data.skills.map(skillId => ({ skillId }))
                    },
                    interests: {
                        create: data.interests.map(interestId => ({ interestId }))
                    },
                    availability: {
                        create: data.availability
                    }
                },
                include: {
                    skills: true,
                    interests: true,
                    availability: true
                }
            });
            if (data.role === Role.MENTOR) {
                if (!data.bio)
                    throw new BadRequestException('Bio is required for mentors');
                await tx.mentorProfile.create({
                    data: {
                        userId,
                        bio: data.bio,
                        maxMentees: data.maxMentees ?? 2,
                    }
                });
            }
            return profile;
        });
    }
    async updateProfile(userId, data) {
        const existing = await this.prisma.profile.findUnique({ where: { userId } });
        if (!existing)
            throw new NotFoundException('Profile not found');
        return this.prisma.profile.update({
            where: { userId },
            data: {
                ...(data.firstName && { firstName: data.firstName }),
                ...(data.lastName && { lastName: data.lastName }),
                ...(data.yearOfStudy && { yearOfStudy: data.yearOfStudy }),
                ...(data.faculty && { faculty: data.faculty }),
                ...(data.department && { department: data.department }),
                ...(data.goalStatement && {
                    goalStatement: data.goalStatement,
                    goalVector: []
                }),
                ...(data.skills && {
                    skills: {
                        deleteMany: {},
                        create: data.skills.map(skillId => ({ skillId }))
                    }
                }),
                ...(data.interests && {
                    interests: {
                        deleteMany: {},
                        create: data.interests.map(interestId => ({ interestId }))
                    }
                }),
                ...(data.availability && {
                    availability: {
                        deleteMany: {},
                        create: data.availability
                    }
                }),
            },
            include: { skills: true, interests: true, availability: true }
        });
    }
    async getProfile(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            include: { skills: true,
                interests: true,
                availability: true,
                user: { select: { role: true, mentorProfile: true } },
            }
        });
        if (!profile)
            throw new NotFoundException('Profile not found');
        return profile;
    }
};
ProfileService = __decorate([
    Injectable(),
    __param(0, Inject('PRISMA')),
    __metadata("design:paramtypes", [PrismaClient])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map