import DeleteTodoButton from "./DeleteTodoButton";
import { TodoEachItemContainer, TodoItemTitle } from "./style";
const TodoItem = ({ data }: any) => {
  return (
    <TodoEachItemContainer>
      <TodoItemTitle>{data.title}</TodoItemTitle>
      <p>{data.content} </p>
      <DeleteTodoButton id={data.id} />
    </TodoEachItemContainer>
  );
};

export default TodoItem;
