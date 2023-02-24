import React from "react";
import { TodoContent, TodoTitle, TodoDetailModalContainer } from "./style";

const TodoDetailModal = ({ todoData, onClickModifyButton }: any) => {
  return (
    <TodoDetailModalContainer>
      <TodoTitle>{todoData?.title}</TodoTitle>
      <TodoContent>{todoData?.content}</TodoContent>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClickModifyButton();
        }}
      >
        수정
      </button>
    </TodoDetailModalContainer>
  );
};

export default TodoDetailModal;
