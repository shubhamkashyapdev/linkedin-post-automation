import GithubProvider from 'next-auth/providers/github';
import { env } from '@/env/server.mjs';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/server/db';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) return false;
      const dbUser = await prisma.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          email: user.email,
          name: user.name || undefined,
          image: user.image || undefined,
        },
        update: {
          name: user.name || undefined,
          image: user.image || undefined,
        },
      });
      user.dbUser = dbUser;
      return true;
    },
    async jwt({ token, user }) {
      if (user?.dbUser) {
        token.id = user.dbUser.id;
      } else if (user) {
        for (const [key, value] of Object.entries(user)) {
          token[key] = value;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as number;
      }
      return session;
    },
  },
};
