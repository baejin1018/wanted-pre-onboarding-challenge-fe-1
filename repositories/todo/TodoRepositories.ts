import customAxios from "lib/customAxios";
import { postTodoParam } from "./TodoRepositories.param";

class TodoRepositories {
  public async getTodo() {
    const {
      data: { data },
    } = await customAxios.get("/todos");
    return data;
  }

  public async createTodo({ title, content }: postTodoParam) {
    customAxios.post("/todos", { title, content });
  }
}

export default new TodoRepositories();
