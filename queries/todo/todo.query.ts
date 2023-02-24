import { useMutation, useQuery } from "@tanstack/react-query";
import TodoRepositories from "repositories/todo/TodoRepositories";
import {
  deleteAndGetTodoByIdTodoType,
  postTodoType,
  updateTodoType,
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
  const mutiton = useMutation(({ id }: deleteAndGetTodoByIdTodoType) =>
    TodoRepositories.deleteTodo({ id })
  );
  return mutiton;
};

export const useGetTodoById = ({ id }: deleteAndGetTodoByIdTodoType) => {
  return useQuery(["getTodoById", id], () => TodoRepositories.getTodo({ id }), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
};

export const useUpdateTodoMutation = () => {
  const mutate = useMutation(({ id, title, content }: updateTodoType) =>
    TodoRepositories.updateTodo({ id, title, content })
  );
  return mutate;
};
