import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Profile: 'Profile',
    MentorProfile: 'MentorProfile',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Skill: 'Skill',
    Interest: 'Interest',
    ProfileSkill: 'ProfileSkill',
    ProfileInterest: 'ProfileInterest',
    Project: 'Project',
    ProjectSkill: 'ProjectSkill',
    ProjectApplication: 'ProjectApplication',
    Availability: 'Availability',
    SchedulerRun: 'SchedulerRun',
    CompatibilityScore: 'CompatibilityScore',
    Match: 'Match',
    Waitlist: 'Waitlist'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    institutionRole: 'institutionRole',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    yearOfStudy: 'yearOfStudy',
    faculty: 'faculty',
    department: 'department',
    goalStatement: 'goalStatement',
    goalVector: 'goalVector',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MentorProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    maxMentees: 'maxMentees',
    currentMentees: 'currentMentees',
    isAvailable: 'isAvailable',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
};
export const AccountScalarFieldEnum = {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const VerificationScalarFieldEnum = {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SkillScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
export const InterestScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
export const ProfileSkillScalarFieldEnum = {
    profileId: 'profileId',
    skillId: 'skillId'
};
export const ProfileInterestScalarFieldEnum = {
    profileId: 'profileId',
    interestId: 'interestId'
};
export const ProjectScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProjectSkillScalarFieldEnum = {
    projectId: 'projectId',
    skillId: 'skillId'
};
export const ProjectApplicationScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    applicantId: 'applicantId',
    status: 'status',
    appliedAt: 'appliedAt'
};
export const AvailabilityScalarFieldEnum = {
    id: 'id',
    profileId: 'profileId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime'
};
export const SchedulerRunScalarFieldEnum = {
    id: 'id',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    matchesCreated: 'matchesCreated',
    waitlistedCount: 'waitlistedCount',
    status: 'status',
    error: 'error'
};
export const CompatibilityScoreScalarFieldEnum = {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    skillScore: 'skillScore',
    interestScore: 'interestScore',
    goalScore: 'goalScore',
    fieldScore: 'fieldScore',
    availabilityScore: 'availabilityScore',
    yearGapScore: 'yearGapScore',
    totalScore: 'totalScore',
    computedAt: 'computedAt'
};
export const MatchScalarFieldEnum = {
    id: 'id',
    menteeId: 'menteeId',
    mentorId: 'mentorId',
    status: 'status',
    matchedAt: 'matchedAt',
    dissolvedAt: 'dissolvedAt'
};
export const WaitlistScalarFieldEnum = {
    id: 'id',
    menteeId: 'menteeId',
    joinedAt: 'joinedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map