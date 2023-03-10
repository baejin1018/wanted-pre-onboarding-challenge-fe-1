import useAuth from "../hook/useAuth";
import { LoginDiv } from "./style";

const Login = () => {
  const { handleSubmit, register, isValid, submitLogin } = useAuth();
  return (
    <LoginDiv>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
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
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
        />
        <button type="submit" disabled={!isValid}>
          로그인
        </button>
      </form>
    </LoginDiv>
  );
};

export default Login;
