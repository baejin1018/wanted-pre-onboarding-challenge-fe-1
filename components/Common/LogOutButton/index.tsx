import useLogOut from "./hook/useLogOut";
import useLogOutButton from "./hook/useLogOut";

const LogoutButton = () => {
  const onClickLogOutBtn = useLogOut();
  return (
    <div>
      <button onClick={onClickLogOutBtn}>๋ก๊ทธ์์</button>
    </div>
  );
};

export default LogoutButton;
