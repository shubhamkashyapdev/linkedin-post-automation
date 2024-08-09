'use client';
import React from 'react';
import { trpc } from '../trpc/client';

const TodoList = ({ data: todosData }: { data: any }) => {
  const { data } = trpc.todo.getTodos.useQuery(undefined, {
    initialData: todosData,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default TodoList;
