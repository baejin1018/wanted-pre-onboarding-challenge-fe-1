import customAxios from "lib/customAxios";
import { postTodoParam } from "./TodoRepositories.param";

class TodoRepositories {
  public async getTodo() {
    const {
      data: { data },
    } = await customAxios.get("/todos");
    console.log(data);
    return data;
  }

  public async createTodo({ title, content }: postTodoParam) {
    await customAxios.post("/todos", { title, content });
  }
}

export default new TodoRepositories();
