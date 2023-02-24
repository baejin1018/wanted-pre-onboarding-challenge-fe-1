import { title } from "process";
import { useUpdateTodoMutation } from "queries/todo/todo.query";
import { updateTodoType } from "repositories/todo/TodoRepositories.param";
import { useForm } from "react-hook-form";

const useModfyTodo = () => {
  const updateMutation = useUpdateTodoMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<updateTodoType>();

  const submitUpdateTodo = ({ id, title, content }: updateTodoType) => {
    updateMutation.mutate(
      { id, title, content },
      {
        onError: () => {
          window.alert("수정하던중 에러가 발생하였습니다");
        },
      }
    );
  };
  return { submitUpdateTodo, register, handleSubmit, isValid };
};

export default useModfyTodo;
