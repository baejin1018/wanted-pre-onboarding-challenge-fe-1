import Signup from "components/auth/SignUp";
import dynamic from "next/dynamic";
const signup = () => {
  const NoSSRSignUp = dynamic(() => import("../../components/auth/SignUp"), {
    ssr: false,
  });
  return (
    <>
      <NoSSRSignUp />
    </>
  );
};

export default signup;
