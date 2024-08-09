import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from '@/server/api/root';
import { createInnerTRPCContext } from '@/server/api/trpc';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth-options';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () =>
      createInnerTRPCContext({
        session: await getServerSession(authOptions),
      }),
  });

export { handler as GET, handler as POST };
