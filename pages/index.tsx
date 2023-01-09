import withAuth from "components/HOC/withAuth";
import Home from "components/Home";
const home = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default withAuth(home);
