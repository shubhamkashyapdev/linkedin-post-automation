import { createTRPCRouter, privateProcedure, publicProcedure } from '../trpc';

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany();
    return {
      todos: todos,
    };
  }),
  createTodo: privateProcedure.mutation(async ({ ctx }) => {
    await ctx.prisma.todo.create({
      data: {
        todo: 'New Todo',
        done: false,
      },
    });
  }),
});
