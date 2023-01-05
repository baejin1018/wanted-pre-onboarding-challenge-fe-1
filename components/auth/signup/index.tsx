import { useForm } from "react-hook-form";
import AuthRepositories from "repositories/auth/AuthRepositories";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div>
      <h1>회원가입</h1>
      <form
        onSubmit={handleSubmit(({ email, password }) =>
          AuthRepositories.postSignUp({ email, password })
        )}
      >
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          placeholder="test@email.com"
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="****************"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
        />
        <button type="submit" disabled={isSubmitting}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
