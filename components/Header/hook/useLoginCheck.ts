import Token from "lib/Token";
import { useEffect } from "react";

const useLoginCheck = () => {
  const isLogin = Token.getToken("token");
  return isLogin;
};

export default useLoginCheck;
