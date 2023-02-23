import customAxios from "lib/customAxios";
import {
  deleteTodoType,
  postTodoType,
} from "repositories/todo/TodoRepositories.param";

class TodoRepositories {
  public async getTodos() {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async createTodo({ title, content }: postTodoType): Promise<void> {
    await customAxios.post("/todos", { title, content });
  }

  public async deleteTodo({ id }: deleteTodoType) {
    await customAxios.delete(`/todos/${id}`);
  }
}

export default new TodoRepositories();
