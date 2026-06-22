import { PrismaClient } from '../../generated/prisma/client.js';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaClient);
    getUser(userId: string): Promise<{
        name: string | null;
        email: string;
        image: string | null;
        role: import("../../generated/prisma/enums.js").Role;
        profile: {
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
        } | null;
    } | null>;
}
