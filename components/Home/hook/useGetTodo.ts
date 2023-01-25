import { useEffect, useState } from "react";
import TodoRepositories from "repositories/todo/TodoRepositories";

const useGetTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodoData();
  }, []);

  const getTodoData = async () => {
    const todoData = await TodoRepositories.getTodo();
    setTodos(todoData);
  };

  return todos;
};

export default useGetTodo;
