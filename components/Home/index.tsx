import withAuth from "components/HOC/withAuth";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useGetTodosQuery } from "queries/todo/todo.query";
import { todoDataType } from "repositories/todo/TodoRepositories.param";
import TodoTitle from "./TodoTitle";
import {
  TodoContainer,
  TodoInputContentContainer,
  TodoItemContainer,
} from "./style";

const Home = () => {
  const { data: todos } = useGetTodosQuery();
  return (
    <TodoContainer>
      <TodoTitle />
      <TodoInputContentContainer>
        <TodoInput />
        <TodoItemContainer>
          {todos?.data.map((data: todoDataType) => {
            return <TodoItem data={data} key={data.id} />;
          })}
        </TodoItemContainer>
      </TodoInputContentContainer>
    </TodoContainer>
  );
};

export default withAuth(Home);
