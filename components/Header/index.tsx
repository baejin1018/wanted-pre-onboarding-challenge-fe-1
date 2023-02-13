import LogoutButton from "components/Common/LogOutButton";
import Link from "next/link";
import React from "react";
import useLoginCheck from "./hook/useLoginCheck";
import useSelectNavItem from "./hook/useSelectNavItem";
import { HeaderContainer, HeaderTitle, NavCotainer, NavItem } from "./style";

const Header = () => {
  const { selectHome, selectSignup, selectLogin } = useSelectNavItem();
  const isLogin = useLoginCheck();
  return (
    <HeaderContainer>
      <HeaderTitle>Todo</HeaderTitle>
      <NavCotainer isLogin>
        <NavItem fontColor={selectHome}>
          <Link href="/">Home</Link>
        </NavItem>
        {!isLogin ? (
          <>
            <NavItem fontColor={selectLogin}>
              <Link href="/auth/login">Sign in</Link>
            </NavItem>
            <NavItem fontColor={selectSignup}>
              <Link href="/auth/signup">Sign up</Link>
            </NavItem>
          </>
        ) : (
          <NavItem>
            <LogoutButton />
          </NavItem>
        )}
      </NavCotainer>
    </HeaderContainer>
  );
};

export default Header;
