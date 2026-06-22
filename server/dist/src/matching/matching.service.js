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
import { Inject, BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
let MatchingService = class MatchingService {
    prisma;
    baseUrl = process.env.PYTHON_SCORING_URL ?? 'http://localhost:8000';
    internalKey = process.env.INTERNAL_API_KEY;
    constructor(prisma) {
        this.prisma = prisma;
    }
    get headers() {
        return {
            'content-type': 'application/json',
            'x-internal-secret': this.internalKey,
        };
    }
    async scorePair(targetUserId, viewerUserId) {
        const response = await fetch(`${this.baseUrl}/scoring/compatibility`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                ...(this.internalKey && { 'x-internal-secret': this.internalKey }),
            },
            body: JSON.stringify({ targetUserId, viewerUserId }),
        });
        if (!response.ok)
            throw new BadGatewayException('Scoring service unavailable');
        return response.json();
    }
    async runMatching() {
        const mentors = await this.prisma.user.findMany({
            where: { role: 'MENTOR' },
            include: {
                profile: {
                    include: { skills: true, interests: true, availability: true }
                },
                mentorProfile: true,
            }
        });
        const mentees = await this.prisma.user.findMany({
            where: { role: 'MENTEE' },
            include: {
                profile: {
                    include: { skills: true, interests: true, availability: true }
                }
            }
        });
        const response = await fetch(`${this.baseUrl}/matching/run`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                ...(this.internalKey && { 'x-internal-secret': this.internalKey }),
            },
            body: JSON.stringify({ mentors, mentees }),
        });
        if (!response.ok)
            throw new BadGatewayException('Matching service unavailable');
        const data = await response.json();
        const matches = data.matches;
        await this.prisma.match.createMany({
            data: matches.map(([menteeId, mentorId]) => ({
                menteeId,
                mentorId,
                status: 'COMPLETED',
            }))
        });
        return data;
    }
};
MatchingService = __decorate([
    Injectable(),
    __param(0, Inject('PRISMA')),
    __metadata("design:paramtypes", [PrismaClient])
], MatchingService);
export { MatchingService };
//# sourceMappingURL=matching.service.js.map