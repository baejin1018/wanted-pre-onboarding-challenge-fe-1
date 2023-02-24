import DeleteTodoButton from "./DeleteTodoButton";
import useModal from "./hook/useModal";
import useSuccessTodo from "./hook/useSuccessTodo";
import {
  TitleContentContainer,
  DeleteAndSuccessButtonContainer,
  TodoEachItemContainer,
  TodoItemTitle,
  TodoContent,
} from "./style";
import SuccessTodoButton from "./SuccessTodoButton";
import TodoItemModal from "./TodoItemModal";
const TodoItem = ({ data }: any) => {
  const { onClickSuccessButton, isSuccessTodo } = useSuccessTodo();
  const { closeModal, isOpenModal, openModal } = useModal();

  return (
    <>
      <TodoEachItemContainer onClick={openModal} isSuccess={isSuccessTodo}>
        <TitleContentContainer>
          <TodoItemTitle>{data.title}</TodoItemTitle>
          <TodoContent>{data.content} </TodoContent>
        </TitleContentContainer>
        <DeleteAndSuccessButtonContainer>
          <SuccessTodoButton onClickSuccessButton={onClickSuccessButton} />
          <DeleteTodoButton id={data.id} />
        </DeleteAndSuccessButtonContainer>
      </TodoEachItemContainer>
      {isOpenModal && <TodoItemModal id={data.id} closeModal={closeModal} />}
    </>
  );
};

export default TodoItem;
