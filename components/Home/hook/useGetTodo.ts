import { useEffect, useState } from "react";
import TodoRepositories from "repositories/todo/TodoRepositories";

const useGetTodo = () => {
  const [todos, setTodos] = useState([]);
  const todoData = TodoRepositories.getTodo();
  useEffect(() => {
    setTodos(todoData);
  }, []);

  return todos;
};

export default useGetTodo;
