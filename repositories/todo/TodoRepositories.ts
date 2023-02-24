import customAxios from "lib/customAxios";
import {
  deleteAndGetTodoByIdTodoType,
  postTodoType,
  updateTodoType,
} from "repositories/todo/TodoRepositories.param";

class TodoRepositories {
  public async getTodos() {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async createTodo({ title, content }: postTodoType): Promise<void> {
    await customAxios.post("/todos", { title, content });
  }

  public async deleteTodo({ id }: deleteAndGetTodoByIdTodoType) {
    await customAxios.delete(`/todos/${id}`);
  }

  public async getTodo({ id }: deleteAndGetTodoByIdTodoType) {
    const { data } = await customAxios.get(`/todos/${id}`);
    return data;
  }

  public async updateTodo({ id, title, content }: updateTodoType) {
    await customAxios.put(`/todos/${id}`, { title, content });
  }
}

export default new TodoRepositories();
