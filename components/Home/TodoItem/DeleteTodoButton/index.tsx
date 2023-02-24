import { deleteAndGetTodoByIdTodoType } from "repositories/todo/TodoRepositories.param";
import useDeleteTodo from "./hook/useDeleteTodo";
import { DeleteTodoButtonContainer } from "./style";

const DeleteTodoButton = ({ id }: deleteAndGetTodoByIdTodoType) => {
  const onClickDeleteTodoButton = useDeleteTodo({ id });
  return (
    <DeleteTodoButtonContainer>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClickDeleteTodoButton();
        }}
      >
        삭제
      </button>
    </DeleteTodoButtonContainer>
  );
};

export default DeleteTodoButton;
