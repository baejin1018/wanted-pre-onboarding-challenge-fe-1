import { useMutation, useQuery } from "@tanstack/react-query";
import TodoRepositories from "repositories/todo/TodoRepositories";
import {
  deleteTodoType,
  postTodoType,
} from "repositories/todo/TodoRepositories.param";

export const useGetTodosQuery = () => {
  return useQuery(["getTodo"], () => TodoRepositories.getTodos(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
};

export const usePostTodoMutation = () => {
  const mutiton = useMutation(({ title, content }: postTodoType) =>
    TodoRepositories.createTodo({ title, content })
  );
  return mutiton;
};

export const useDeleteTodoMutation = () => {
  const mutiton = useMutation(({ id }: deleteTodoType) =>
    TodoRepositories.deleteTodo({ id })
  );
  return mutiton;
};
