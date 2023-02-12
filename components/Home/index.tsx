import withAuth from "components/HOC/withAuth";
import React from "react";
import useGetTodo from "./hook/useGetTodo";
import LogoutButton from "./LogOutButton";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Home = () => {
  const todos = useGetTodo();

  return (
    <React.Fragment>
      <LogoutButton />
      <h1>Todo</h1>
      <TodoInput />
      {todos.map((data) => {
        return <TodoItem data={data} />;
      })}
    </React.Fragment>
  );
};

export default withAuth(Home);
