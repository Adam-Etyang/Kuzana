import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

// Mirrors the server's `auth` instance (server/lib/auth.ts):
//  - email + password enabled, email verification required on signup
//  - additional user field `role`: "MENTEE" | "MENTOR" (matches Prisma Role enum)
//    defaults to "MENTEE"; only the mentor signup sends "MENTOR"
//
// The server auth instance lives in the NestJS app on port 3001 and is mounted
// at /api/auth via @thallesp/nestjs-better-auth, so baseURL points there.
export const authClient = createAuthClient({
  baseURL: "http://localhost:3001",
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: ["MENTEE", "MENTOR"],
          required: true,
          input: true,
          defaultValue: "MENTEE",
        },
      },
    }),
  ],
});
