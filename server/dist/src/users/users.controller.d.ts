import { UsersService } from './users.service.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(id: string): Promise<{
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
    me(req: any): Promise<Response>;
}
