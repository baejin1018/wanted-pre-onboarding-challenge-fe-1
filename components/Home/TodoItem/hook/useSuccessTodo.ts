import { useEffect, useState } from "react";

const useSuccessTodo = () => {
  const [isSuccessTodo, setIsSuccessTodo] = useState(false);
  const [c, setC] = useState(1);
  useEffect(() => {
    console.log(isSuccessTodo);
  });
  const onClickSuccessButton = () => {
    setIsSuccessTodo(true);
  };

  const cc = () => {
    setC((prev) => prev + 1);
  };
  return { c, cc, isSuccessTodo, onClickSuccessButton };
};

export default useSuccessTodo;
