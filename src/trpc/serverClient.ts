import { prisma } from '@/server/db';
import { appRouter } from '@/server/api/root';
import { Session } from 'next-auth';
import { createCallerFactory } from '@trpc/server';

const createCaller = createCallerFactory();
const routeCaller = createCaller(appRouter);
export const serverClient = (session: Session | null) =>
  routeCaller({
    prisma,
    session: session,
  });
