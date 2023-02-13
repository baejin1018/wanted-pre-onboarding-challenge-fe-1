import customAxios from "lib/customAxios";
import { postTodoType } from "types/todo/todo.type";

class TodoRepositories {
  public async getTodos() {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async createTodo({ title, content }: postTodoType): Promise<void> {
    await customAxios.post("/todos", { title, content });
  }
}

export default new TodoRepositories();
