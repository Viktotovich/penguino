import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../prisma/prisma";
import "dotenv/config";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 15 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    //sendResetPassword << TODO
  },
  // TODO: Verify email callback
  // https://www.better-auth.com/docs/authentication/email-password
  socialProviders: {
    reddit: {
      clientId: process.env.REDDIT_CLIENT_ID as string,
      clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
      duration: "permanent",
      scope: ["identity"],
    },
    google: {
      prompt: "select_account consent",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLEINT_SECRET as string,
      accessType: "offline",
    },
  },
});
