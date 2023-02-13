import { useForm } from "react-hook-form";
import TodoRepositories from "repositories/todo/TodoRepositories";
import useCreateTodo from "./hook/useCreateTodo";
import {
  LabelTitle,
  InputFormContainer,
  TitleInputContainer,
  ContentInputContainer,
  ContetInput,
  TitleInput,
} from "./style";

const TodoInput = () => {
  const { register, handleSubmit, isValid, submitTodo } = useCreateTodo();

  return (
    <form onSubmit={handleSubmit(submitTodo)}>
      <InputFormContainer>
        <TitleInputContainer>
          <label htmlFor="title">
            <LabelTitle>Title</LabelTitle>
          </label>
          <TitleInput
            id="title"
            type="text"
            {...register("title", {
              required: "제목을 적어주세요",
            })}
          />
        </TitleInputContainer>
        <ContentInputContainer>
          <label htmlFor="content">
            <LabelTitle>content</LabelTitle>
          </label>
          <ContetInput
            id="content"
            {...register("content", {
              required: "내용을 적어주세요",
            })}
          />
        </ContentInputContainer>
        <button type="submit" disabled={!isValid}>
          확인
        </button>
      </InputFormContainer>
    </form>
  );
};

export default TodoInput;
