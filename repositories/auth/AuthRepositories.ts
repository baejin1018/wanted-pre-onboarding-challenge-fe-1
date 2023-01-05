import customAxios from "lib/customAxios";
import { postSignUpParma } from "./AuthRepositorues.param";

class AuthRepositories {
  public async postSignUp({ email, password }: postSignUpParma) {
    try {
      const { data } = await customAxios.post("/users/create", {
        email,
        password,
      });
      alert(data.message);
      location.href = "/";
    } catch (error) {
      alert(error);
    }
  }
}

export default new AuthRepositories();
