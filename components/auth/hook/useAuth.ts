import { AxiosError } from "axios";
import Token from "lib/Token";
import { useRouter } from "next/router";
import {
  usePostLoginMutation,
  usePostSignUpMutation,
} from "queries/auth/auth.query";
import { useForm } from "react-hook-form";
import AuthRepositories from "repositories/auth/AuthRepositories";
import { submitAuthTypes } from "./useAuth.type";

const useAuth = () => {
  const saveEmailValue = window.localStorage.getItem("email") ?? "";
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<submitAuthTypes>({
    defaultValues: {
      email: saveEmailValue,
      password: "",
    },
  });

  const router = useRouter();
  const postLoginMutation = usePostLoginMutation();
  const postSginUpMutation = usePostSignUpMutation();

  const submitLogin = ({ email, password }: submitAuthTypes) => {
    postLoginMutation.mutate(
      { email, password },
      {
        onSuccess: ({ message, token }) => {
          Token.setToken("token", token);
          window.alert(message);
          window.localStorage.removeItem("email");
          router.push("/");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            router.reload();
            window.localStorage.setItem("email", email);
            window.alert(error.response?.data.details);
          }
        },
      }
    );
  };

  const submitSignUp = ({ email, password }: submitAuthTypes) => {
    postSginUpMutation.mutate(
      { email, password },
      {
        onSuccess: ({ message }) => {
          window.alert(message);
          router.push("/auth/login");
        },
        onError: (error: any) => {
          if (error instanceof AxiosError) {
            window.alert(error.response?.data.details);
          }
        },
      }
    );
  };

  return {
    handleSubmit,
    register,
    isValid,
    submitLogin,
    submitSignUp,
  };
};

export default useAuth;
