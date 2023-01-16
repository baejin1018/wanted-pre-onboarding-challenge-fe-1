import { useEffect, useState } from "react";
import TodoRepositories from "repositories/todo/TodoRepositories";

const useGetTodo = () => {
  const todoData = TodoRepositories.getTodo();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log("TDD", todoData);
  });
  // useEffect(() => {
  //   console.log("todoData", todoData);
  //   setTodos(todoData);
  // }, []);

  return todos;
};

export default useGetTodo;
