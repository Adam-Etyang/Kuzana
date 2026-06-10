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
import { UseGuards, Controller, Body, Get, Post, Put, Param, Req, } from '@nestjs/common';
import { AuthGuard } from '@thallesp/nestjs-better-auth';
import { InternalGuard } from './lib/InternalGuard.js';
import { ProfileService } from './profile.service.js';
import { UpdateProfileDto } from './DTO/update-profile.dto.js';
let ProfileController = class ProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    async submitProfile(req, body) {
        return this.profileService.submitProfile(req.user.id, body);
    }
    async updateProfile(id, body) {
        return await this.profileService.updateProfile(id, body);
    }
    async getProfile(id) {
        return await this.profileService.getProfile(id);
    }
};
__decorate([
    Post('submit'),
    __param(0, Req()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "submitProfile", null);
__decorate([
    Put('update/:id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getProfile", null);
ProfileController = __decorate([
    Controller('profile'),
    UseGuards(AuthGuard),
    __metadata("design:paramtypes", [ProfileService])
], ProfileController);
export { ProfileController };
let InternalProfileController = class InternalProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getProfile(id) {
        return await this.profileService.getProfile(id);
    }
};
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InternalProfileController.prototype, "getProfile", null);
InternalProfileController = __decorate([
    Controller('profile/internal'),
    UseGuards(InternalGuard),
    __metadata("design:paramtypes", [ProfileService])
], InternalProfileController);
export { InternalProfileController };
//# sourceMappingURL=profile.controller.js.map