import withAuth from "components/HOC/withAuth";
import Home from "components/Home";
import dynamic from "next/dynamic";

const home = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default withAuth(home);
