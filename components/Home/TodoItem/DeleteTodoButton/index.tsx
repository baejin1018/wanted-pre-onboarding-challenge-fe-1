import { deleteTodoType } from "repositories/todo/TodoRepositories.param";
import useDeleteTodo from "./hook/useDeleteTodo";
import { DeleteTodoButtonContainer } from "./style";

const DeleteTodoButton = ({ id }: deleteTodoType) => {
  const onClickDeleteTodoButton = useDeleteTodo({ id });
  return (
    <DeleteTodoButtonContainer>
      <button onClick={onClickDeleteTodoButton}>삭제</button>
    </DeleteTodoButtonContainer>
  );
};

export default DeleteTodoButton;
