import React from "react";
import useSuccessTodo from "../hook/useSuccessTodo";

type Props = {
  onClickSuccessButton: () => void;
};

const SuccessTodoButton: React.FC<Props> = ({ onClickSuccessButton }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClickSuccessButton();
        }}
      >
        확인
      </button>
    </>
  );
};

export default SuccessTodoButton;
