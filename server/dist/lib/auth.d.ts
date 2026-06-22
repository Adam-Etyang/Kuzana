export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    emailAndPassword: {
        enabled: true;
        requireEmailVerification: true;
    };
    user: {
        additionalFields: {
            role: {
                type: ("Mentee" | "Mentor")[];
                required: true;
                input: true;
            };
        };
    };
    emailVerification: {
        sendOnSignUp: true;
        autoSignInAfterVerification: true;
        expiresIn: number;
        sendVerificationEmail: ({ user, url, token }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }, request: Request | undefined) => Promise<void>;
    };
    trustedOrigins: string[];
}>;
