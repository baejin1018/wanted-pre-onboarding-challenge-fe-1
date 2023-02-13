import { TodoTitleContainer, TodoLogoTitle, TodoMiniTitle } from "./style";

const TodoTitle = () => {
  return (
    <TodoTitleContainer>
      <TodoLogoTitle>Todo</TodoLogoTitle>
      <TodoMiniTitle>자신이 약속한 일을 지켜봐요</TodoMiniTitle>
    </TodoTitleContainer>
  );
};

export default TodoTitle;
