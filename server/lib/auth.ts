import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from './prisma.js';
import { sendEmail } from './email.js';
//import {admin} from 'better-auth/plugins';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true, 
  },

  user: {
    additionalFields: {
      role: {
        type: ["MENTEE", "MENTOR"], // must match the Prisma `Role` enum casing
        required: true,
        input: true, // user can set this at signup (mentor signup sends "MENTOR")
        defaultValue: "MENTEE", // student signup defaults to MENTEE
      },
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const result = await sendEmail({
          to: user.email,
          subject: "Verify your email",
          text: `Click the link to verify your email: ${url}`,
          html: `<p>Click the link to verify your email: <a href="${url}">${url}</a></p>`,
        });
        if (result.error) {
          console.error("[email] Resend returned an error:", result.error);
        }
      } catch (err) {
        console.error("[email] Failed to send verification email:", err);
        throw err;
      }
    },
  },

/*  plugins :[
    admin()
  ],
  */

  trustedOrigins: ["http://localhost:3000", "http://localhost:3001"],
/*
  cookies: {
    sessionToken: {
      name: "better-auth.session_token",
      secure: false, // set to true in production with HTTPS
      sameSite: "lax", // or "none" if cross-origin
      path: "/",
      httpOnly: true,
    },
  },
  */
});
