import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #5cb85c;
`;
export const NavCotainer = styled.ul<{ isLogin: Boolean }>`
  width: ${(props) => (props.isLogin ? "10%" : "30%")};
  height: 38px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.li`
  a {
    color: ${(props: any) => (props.fontColor ? "black" : "#0000004D")};
    text-decoration: none;
  }
`;
