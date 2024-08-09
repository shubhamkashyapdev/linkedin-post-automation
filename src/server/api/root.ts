import { todoRouter } from './routers/todo.router';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
