import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
`;

export const NavCotainer = styled.ul`
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
