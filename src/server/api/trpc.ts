import { TRPCError, initTRPC } from '@trpc/server';
import { prisma } from '@/server/db';
import { type Session } from 'next-auth';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerAuthSession } from '../auth';
import superjson from 'superjson';

type CreateContextOptions = {
  session: Session | null;
};

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  const session = await getServerAuthSession({ req, res });
  return createInnerTRPCContext({
    session,
  });
};
export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const inferSession = t.middleware(({ ctx, next }) => {
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session?.user },
      prisma,
    },
  });
});

const enforceAuth = t.middleware(({ ctx, next }) => {
  if (!ctx?.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
      prisma,
    },
  });
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure.use(inferSession);
export const privateProcedure = t.procedure.use(enforceAuth);
