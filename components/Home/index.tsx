import withAuth from "components/HOC/withAuth";
import useGetTodo from "./hook/useGetTodo";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Home = () => {
  const todo = useGetTodo();
  console.log("td", todo);
  return (
    <>
      <h1>Todo</h1>
      <TodoInput />
      {todo &&
        todo.map((data) => {
          return <TodoItem data={data} />;
        })}
    </>
  );
};

export default Home;
