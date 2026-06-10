import { ProfileService } from './profile.service.js';
import { UpdateProfileDto } from './DTO/update-profile.dto.js';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    submitProfile(req: any, body: any): Promise<{
        skills: {
            profileId: string;
            skillId: string;
        }[];
        interests: {
            profileId: string;
            interestId: string;
        }[];
        availability: {
            id: string;
            profileId: string;
            dayOfWeek: import("../../generated/prisma/enums.js").DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
    updateProfile(id: string, body: UpdateProfileDto): Promise<{
        skills: {
            profileId: string;
            skillId: string;
        }[];
        interests: {
            profileId: string;
            interestId: string;
        }[];
        availability: {
            id: string;
            profileId: string;
            dayOfWeek: import("../../generated/prisma/enums.js").DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
    getProfile(id: string): Promise<{
        user: {
            role: import("../../generated/prisma/enums.js").Role;
            mentorProfile: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                maxMentees: number;
                currentMentees: number;
                isAvailable: boolean;
                bio: string;
            } | null;
        };
        skills: {
            profileId: string;
            skillId: string;
        }[];
        interests: {
            profileId: string;
            interestId: string;
        }[];
        availability: {
            id: string;
            profileId: string;
            dayOfWeek: import("../../generated/prisma/enums.js").DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
}
export declare class InternalProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProfile(id: string): Promise<{
        user: {
            role: import("../../generated/prisma/enums.js").Role;
            mentorProfile: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                maxMentees: number;
                currentMentees: number;
                isAvailable: boolean;
                bio: string;
            } | null;
        };
        skills: {
            profileId: string;
            skillId: string;
        }[];
        interests: {
            profileId: string;
            interestId: string;
        }[];
        availability: {
            id: string;
            profileId: string;
            dayOfWeek: import("../../generated/prisma/enums.js").DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
}
