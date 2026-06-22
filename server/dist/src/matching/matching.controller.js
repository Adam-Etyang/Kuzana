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
import { Body, Controller, Post } from '@nestjs/common';
import { MatchingService } from './matching.service.js';
let MatchingController = class MatchingController {
    matchingService;
    constructor(matchingService) {
        this.matchingService = matchingService;
    }
    async scorePair(body) {
        return this.matchingService.scorePair(body.targetUserId, body.viewerUserId);
    }
    async runMatching() {
        return this.matchingService.runMatching();
    }
};
__decorate([
    Post('score'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "scorePair", null);
__decorate([
    Post('run'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "runMatching", null);
MatchingController = __decorate([
    Controller('matching'),
    __metadata("design:paramtypes", [MatchingService])
], MatchingController);
export { MatchingController };
//# sourceMappingURL=matching.controller.js.map