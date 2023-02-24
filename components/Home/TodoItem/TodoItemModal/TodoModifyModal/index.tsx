import React from "react";
import useModfyTodo from "./hook/useModfyTodo";
import { TodoContent, TodoTitle, TodoDetailModalContainer } from "./style";

const TodoModifyModal = ({ todoData, onClickCloseModifyButton }: any) => {
  const { submitUpdateTodo, register, handleSubmit, isValid } = useModfyTodo();

  return (
    <TodoDetailModalContainer>
      <form onSubmit={handleSubmit(submitUpdateTodo)}>
        <TodoTitle
          value={todoData?.title}
          id="title"
          type="text"
          {...register("title", {
            required: "제목을 입력해 주세요.",
          })}
        />
        <TodoContent
          defaultValue={todoData?.content}
          id="content"
          {...register("content", {
            required: "내용을 입력해주세요.",
          })}
        ></TodoContent>
        <button type="submit" disabled={!isValid}>
          수정
        </button>
      </form>
    </TodoDetailModalContainer>
  );
};

export default TodoModifyModal;
