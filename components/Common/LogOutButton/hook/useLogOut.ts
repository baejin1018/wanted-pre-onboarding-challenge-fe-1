import { useRouter } from "next/router";

const useLogOut = () => {
  const router = useRouter();
  const onClickLogOutBtn = () => {
    window.localStorage.removeItem("token");
    router.push("/auth/login");
  };
  return onClickLogOutBtn;
};
export default useLogOut;
