import { useMutation } from "@tanstack/react-query";
import AuthRepositories from "repositories/auth/AuthRepositories";
import { postSignUpLoginParma } from "repositories/auth/AuthRepositories.param";

export const usePostLoginMutation = () => {
  const mutiton = useMutation(({ email, password }: postSignUpLoginParma) =>
    AuthRepositories.postLogin({ email, password })
  );
  return mutiton;
};

export const usePostSignUpMutation = () => {
  const mutiton = useMutation(({ email, password }: postSignUpLoginParma) =>
    AuthRepositories.postSignUp({ email, password })
  );
  return mutiton;
};
