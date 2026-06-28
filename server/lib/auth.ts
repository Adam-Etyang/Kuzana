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
        type: ["Mentee", "Mentor"],
        required: true,
        input: true, // user sets this at signup
      },
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      void sendEmail({
        to: user.email,
        subject: "Verify your email",
        text: `Click the link to verify your email: ${url}`,
        html: `<p>Click the link to verify your email: <a href="${url}">${url}</a></p>`,
      });
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
