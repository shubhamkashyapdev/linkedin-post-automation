import NextAuth from 'next-auth/next';
import type { DefaultUser } from 'next-auth';
import { ISessionUser } from '@/types/user.types';
import { IDBUser } from '@/types/db.schema.types';

declare module 'next-auth' {
  interface Session {
    user: ISessionUser;
  }
  interface User {
    dbUser: IDBUser;
    firstName?: string;
    lastName?: string;
    email?: string;
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
  }
}
