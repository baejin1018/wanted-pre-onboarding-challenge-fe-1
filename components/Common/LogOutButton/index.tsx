import useLogOut from "./hook/useLogOut";
import useLogOutButton from "./hook/useLogOut";

const LogoutButton = () => {
  const onClickLogOutBtn = useLogOut();
  return (
    <div>
      <button onClick={onClickLogOutBtn}>로그아웃</button>
    </div>
  );
};

export default LogoutButton;
