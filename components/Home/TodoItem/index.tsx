import { TodoEachItemContainer, TodoItemTitle } from "./style";
const TodoItem = ({ data }: any) => {
  return (
    <TodoEachItemContainer>
      <TodoItemTitle>{data.title}</TodoItemTitle>
      <p>{data.content} </p>
    </TodoEachItemContainer>
  );
};

export default TodoItem;
