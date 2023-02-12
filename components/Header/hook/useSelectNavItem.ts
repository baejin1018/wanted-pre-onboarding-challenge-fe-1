import { useRouter } from "next/router";

const useSelectNavItem = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const selectHome = pathname == "/";
  const selectSignup = pathname == "/auth/signup";
  const selectLogin = pathname == "/auth/login";
  console.log(selectHome);
  return { selectHome, selectSignup, selectLogin };
};

export default useSelectNavItem;
