import { PrismaClient } from '../../generated/prisma/client.js';
export declare class MatchingService {
    private readonly prisma;
    private readonly baseUrl;
    private readonly internalKey;
    constructor(prisma: PrismaClient);
    private get headers();
    scorePair(targetUserId: string, viewerUserId: string): Promise<any>;
    runMatching(): Promise<any>;
}
