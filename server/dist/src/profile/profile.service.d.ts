import { PrismaClient, DayOfWeek, Role } from '../../generated/prisma/client.js';
export declare class ProfileService {
    private prisma;
    constructor(prisma: PrismaClient);
    submitProfile(userId: string, data: {
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        skills: string[];
        interests: string[];
        availability: {
            dayOfWeek: DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
        role: Role;
        bio?: string;
        maxMentees?: number;
    }): Promise<{
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
            dayOfWeek: DayOfWeek;
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
        yearOfStudy: number | null;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
    updateProfile(userId: string, data: Partial<{
        firstName: string;
        lastName: string;
        yearOfStudy: number;
        faculty: string;
        department: string;
        goalStatement: string;
        skills: string[];
        interests: string[];
        availability: {
            dayOfWeek: DayOfWeek;
            startTime: string;
            endTime: string;
        }[];
    }>): Promise<{
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
            dayOfWeek: DayOfWeek;
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
        yearOfStudy: number | null;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
    getProfile(userId: string): Promise<{
        user: {
            role: Role;
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
            dayOfWeek: DayOfWeek;
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
        yearOfStudy: number | null;
        faculty: string;
        department: string;
        goalStatement: string;
        goalVector: number[];
    }>;
}
