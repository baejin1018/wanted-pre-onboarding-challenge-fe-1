import { useGetTodoById } from "queries/todo/todo.query";
import useOpenModifyModal from "./hook/useOpenModifyModal";
import { BakcGroundModal } from "./style";
import TodoDetailModal from "./TodoDetailModal";
import TodoModifyModal from "./TodoModifyModal";

interface Props {
  closeModal: () => void;
  id: string;
}

const TodoItemModal: React.FC<Props> = ({ closeModal, id }) => {
  const { data: todoData } = useGetTodoById({ id });
  const { isModify, onClickModifyButton, onClickCloseModifyButton } =
    useOpenModifyModal();
  return (
    <>
      <BakcGroundModal onClick={closeModal} />
      {todoData && isModify ? (
        <TodoModifyModal
          todoData={todoData?.data}
          onClickCloseModifyButton={onClickCloseModifyButton}
        />
      ) : (
        <TodoDetailModal
          todoData={todoData?.data}
          onClickModifyButton={onClickModifyButton}
        />
      )}
    </>
  );
};

export default TodoItemModal;
