import withAuth from "components/HOC/withAuth";
import React from "react";
import useGetTodo from "./hook/useGetTodo";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Home = () => {
  const todos = useGetTodo();

  return (
    <React.Fragment>
      <h1>Todo</h1>
      <TodoInput />
      {/* {todo &&
        todo.map((data) => {
          return <TodoItem data={data} />;
        })} */}
    </React.Fragment>
  );
};

export default withAuth(Home);
