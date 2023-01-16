import customAxios from "lib/customAxios";
import Token from "lib/Token";
import { postSignUpLoginParma } from "./AuthRepositories.param";

class AuthRepositories {
  public async postSignUp({ email, password }: postSignUpLoginParma) {
    try {
      const {
        data: { message },
      } = await customAxios.post("/users/create", {
        email,
        password,
      });
      alert(message);
      location.href = "/auth/login";
    } catch (error) {
      alert(error);
    }
  }

  public async postLogin({ email, password }: postSignUpLoginParma) {
    try {
      const {
        data: { token, message },
      } = await customAxios.post("/users/login", {
        email,
        password,
      });
      Token.setToken("token", token);
      alert(message);
      location.href = "/";
    } catch (error) {
      alert(error);
    }
  }
}

export default new AuthRepositories();
