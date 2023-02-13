import withAuth from "components/HOC/withAuth";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useGetTodosQuery } from "queries/todo/todo.query";
import { todoDataType } from "types/todo/todo.type";
import TodoTitle from "./TodoTitle";
import { TodoInputContentContainer, TodoItemContainer } from "./style";

const Home = () => {
  const { data: todos } = useGetTodosQuery();
  return (
    <>
      <TodoTitle />
      <TodoInputContentContainer>
        <TodoInput />
        <TodoItemContainer>
          {todos?.data.map((data: todoDataType) => {
            return <TodoItem data={data} key={data.id} />;
          })}
        </TodoItemContainer>
      </TodoInputContentContainer>
    </>
  );
};

export default withAuth(Home);
