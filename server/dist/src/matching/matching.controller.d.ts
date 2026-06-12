import { MatchingService } from './matching.service.js';
export declare class MatchingController {
    private readonly matchingService;
    constructor(matchingService: MatchingService);
    scorePair(body: {
        targetUserId: string;
        viewerUserId: string;
    }): Promise<any>;
}
