import { useQueryClient } from "@tanstack/react-query";
import { useDeleteTodoMutation } from "queries/todo/todo.query";
import { deleteAndGetTodoByIdTodoType } from "repositories/todo/TodoRepositories.param";

const useDeleteTodo = ({ id }: deleteAndGetTodoByIdTodoType) => {
  const queryClient = useQueryClient();
  const deleteTodoMutation = useDeleteTodoMutation();

  const onClickDeleteTodoButton = () => {
    deleteTodoMutation.mutate(
      { id },
      { onSuccess: () => queryClient.invalidateQueries(["getTodo"]) }
    );
  };

  return onClickDeleteTodoButton;
};

export default useDeleteTodo;
