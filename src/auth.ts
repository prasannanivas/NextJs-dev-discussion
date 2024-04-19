import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "@/app/db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "7ec14e7a2c4323357c67";
const GITHUB_CLIENT_SECRET =
  process.env.GITHUB_CLIENT_SECRET ||
  "3a4b74171a3b067ff916eccf872f1bd9a1c7366a";

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing Github OAUTH Credentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // not needed usually
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
