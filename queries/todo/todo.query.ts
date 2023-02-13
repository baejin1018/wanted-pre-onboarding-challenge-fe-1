import { useMutation, useQuery } from "@tanstack/react-query";
import TodoRepositories from "repositories/todo/TodoRepositories";
import { postTodoType } from "types/todo/todo.type";

export const useGetTodosQuery = () => {
  return useQuery(["getTodo"], () => TodoRepositories.getTodos());
};

export const usePostTodoMutation = () => {
  const mutiton = useMutation(({ title, content }: postTodoType) =>
    TodoRepositories.createTodo({ title, content })
  );
  return mutiton;
};
