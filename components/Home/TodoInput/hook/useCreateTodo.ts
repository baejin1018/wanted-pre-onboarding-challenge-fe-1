import { useQueryClient } from "@tanstack/react-query";
import { usePostTodoMutation } from "queries/todo/todo.query";
import { useForm } from "react-hook-form";
import { postTodoType } from "types/todo/todo.type";
const useCreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<postTodoType>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const queryClient = useQueryClient();
  const postTodoMutation = usePostTodoMutation();

  const submitTodo = ({ title, content }: postTodoType) => {
    postTodoMutation.mutate(
      { title, content },
      { onSuccess: () => queryClient.invalidateQueries(["getTodo"]) }
    );
  };

  return { register, handleSubmit, isValid, submitTodo };
};

export default useCreateTodo;
