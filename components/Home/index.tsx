import withAuth from "components/HOC/withAuth";
import React from "react";
import LogoutButton from "components/Common/LogOutButton";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useGetTodosQuery } from "queries/todo/todo.query";

const Home = () => {
  const data = useGetTodosQuery();
  console.log(data);
  return (
    <React.Fragment>
      <TodoInput />
      {/* {todos.map((data) => {
        return <TodoItem data={data} key={Math.random()} />;
      })} */}
    </React.Fragment>
  );
};

export default withAuth(Home);
