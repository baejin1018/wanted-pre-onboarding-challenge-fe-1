import Login from "components/auth/Login";
import dynamic from "next/dynamic";
const login = () => {
  const NoSSRLogin = dynamic(() => import("../../components/auth/Login"), {
    ssr: false,
  });
  return (
    <>
      <NoSSRLogin />
    </>
  );
};

export default login;
