import React from "react";
import { useForm } from "react-hook-form";
import TodoRepositories from "repositories/todo/TodoRepositories";
const TodoInput = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(({ title, content }) =>
          TodoRepositories.createTodo({ title, content })
        )}
      >
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          {...register("title", {
            required: "제목을 적어주세요",
          })}
        />
        <label htmlFor="content">내용</label>
        <input
          id="content"
          type="text"
          {...register("content", {
            required: "내용을 적어주세요",
          })}
        />
        <button type="submit" disabled={!isValid}>
          확인
        </button>
      </form>
    </React.Fragment>
  );
};

export default TodoInput;
