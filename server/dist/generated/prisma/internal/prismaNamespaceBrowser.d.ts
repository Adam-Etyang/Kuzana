import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Profile: "Profile";
    readonly MentorProfile: "MentorProfile";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Skill: "Skill";
    readonly Interest: "Interest";
    readonly ProfileSkill: "ProfileSkill";
    readonly ProfileInterest: "ProfileInterest";
    readonly Project: "Project";
    readonly ProjectSkill: "ProjectSkill";
    readonly ProjectApplication: "ProjectApplication";
    readonly Availability: "Availability";
    readonly SchedulerRun: "SchedulerRun";
    readonly CompatibilityScore: "CompatibilityScore";
    readonly Match: "Match";
    readonly Waitlist: "Waitlist";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly role: "role";
    readonly institutionRole: "institutionRole";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly yearOfStudy: "yearOfStudy";
    readonly faculty: "faculty";
    readonly department: "department";
    readonly goalStatement: "goalStatement";
    readonly goalVector: "goalVector";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const MentorProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly maxMentees: "maxMentees";
    readonly currentMentees: "currentMentees";
    readonly isAvailable: "isAvailable";
    readonly bio: "bio";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MentorProfileScalarFieldEnum = (typeof MentorProfileScalarFieldEnum)[keyof typeof MentorProfileScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const InterestScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum];
export declare const ProfileSkillScalarFieldEnum: {
    readonly profileId: "profileId";
    readonly skillId: "skillId";
};
export type ProfileSkillScalarFieldEnum = (typeof ProfileSkillScalarFieldEnum)[keyof typeof ProfileSkillScalarFieldEnum];
export declare const ProfileInterestScalarFieldEnum: {
    readonly profileId: "profileId";
    readonly interestId: "interestId";
};
export type ProfileInterestScalarFieldEnum = (typeof ProfileInterestScalarFieldEnum)[keyof typeof ProfileInterestScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ProjectSkillScalarFieldEnum: {
    readonly projectId: "projectId";
    readonly skillId: "skillId";
};
export type ProjectSkillScalarFieldEnum = (typeof ProjectSkillScalarFieldEnum)[keyof typeof ProjectSkillScalarFieldEnum];
export declare const ProjectApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly applicantId: "applicantId";
    readonly status: "status";
    readonly appliedAt: "appliedAt";
};
export type ProjectApplicationScalarFieldEnum = (typeof ProjectApplicationScalarFieldEnum)[keyof typeof ProjectApplicationScalarFieldEnum];
export declare const AvailabilityScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly dayOfWeek: "dayOfWeek";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
};
export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum];
export declare const SchedulerRunScalarFieldEnum: {
    readonly id: "id";
    readonly startedAt: "startedAt";
    readonly completedAt: "completedAt";
    readonly matchesCreated: "matchesCreated";
    readonly waitlistedCount: "waitlistedCount";
    readonly status: "status";
    readonly error: "error";
};
export type SchedulerRunScalarFieldEnum = (typeof SchedulerRunScalarFieldEnum)[keyof typeof SchedulerRunScalarFieldEnum];
export declare const CompatibilityScoreScalarFieldEnum: {
    readonly id: "id";
    readonly menteeId: "menteeId";
    readonly mentorId: "mentorId";
    readonly skillScore: "skillScore";
    readonly interestScore: "interestScore";
    readonly goalScore: "goalScore";
    readonly fieldScore: "fieldScore";
    readonly availabilityScore: "availabilityScore";
    readonly yearGapScore: "yearGapScore";
    readonly totalScore: "totalScore";
    readonly computedAt: "computedAt";
};
export type CompatibilityScoreScalarFieldEnum = (typeof CompatibilityScoreScalarFieldEnum)[keyof typeof CompatibilityScoreScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly menteeId: "menteeId";
    readonly mentorId: "mentorId";
    readonly status: "status";
    readonly matchedAt: "matchedAt";
    readonly dissolvedAt: "dissolvedAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const WaitlistScalarFieldEnum: {
    readonly id: "id";
    readonly menteeId: "menteeId";
    readonly joinedAt: "joinedAt";
};
export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
