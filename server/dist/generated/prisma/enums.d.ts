export declare const InstitutionRole: {
    readonly STUDENT: "STUDENT";
    readonly FACULTY: "FACULTY";
};
export type InstitutionRole = (typeof InstitutionRole)[keyof typeof InstitutionRole];
export declare const Role: {
    readonly MENTOR: "MENTOR";
    readonly MENTEE: "MENTEE";
    readonly FACULTY_MENTOR: "FACULTY_MENTOR";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProjectStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
    readonly COMPLETED: "COMPLETED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const ApplicationStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
};
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];
export declare const DayOfWeek: {
    readonly MONDAY: "MONDAY";
    readonly TUESDAY: "TUESDAY";
    readonly WEDNESDAY: "WEDNESDAY";
    readonly THURSDAY: "THURSDAY";
    readonly FRIDAY: "FRIDAY";
    readonly SATURDAY: "SATURDAY";
    readonly SUNDAY: "SUNDAY";
};
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];
export declare const RunStatus: {
    readonly RUNNING: "RUNNING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus];
export declare const MatchStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DISSOLVED: "DISSOLVED";
    readonly COMPLETED: "COMPLETED";
};
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];
