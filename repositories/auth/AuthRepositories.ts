import customAxios from "lib/customAxios";
import { postSignUpLoginParma } from "./AuthRepositories.param";

class AuthRepositories {
  public async postSignUp({ email, password }: postSignUpLoginParma) {
    const { data } = await customAxios.post("/users/create", {
      email,
      password,
    });
    return data;
  }

  public async postLogin({ email, password }: postSignUpLoginParma) {
    const { data } = await customAxios.post("/users/login", {
      email,
      password,
    });
    return data;
  }
}

export default new AuthRepositories();
