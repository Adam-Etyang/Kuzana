var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadGatewayException, Injectable } from '@nestjs/common';
let MatchingService = class MatchingService {
    async scorePair(targetUserId, viewerUserId) {
        const baseUrl = process.env.PYTHON_SCORING_URL ?? 'http://localhost:8000';
        const response = await fetch(`${baseUrl}/scoring/compatibility`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ targetUserId, viewerUserId }),
        });
        if (!response.ok) {
            throw new BadGatewayException('Scoring service unavailable');
        }
        return response.json();
    }
};
MatchingService = __decorate([
    Injectable()
], MatchingService);
export { MatchingService };
//# sourceMappingURL=matching.service.js.map