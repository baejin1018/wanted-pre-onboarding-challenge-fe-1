import { useState } from "react";

const useOpenModifyModal = () => {
  const [isModify, setIsModify] = useState(false);
  const onClickModifyButton = () => {
    setIsModify(true);
  };

  const onClickCloseModifyButton = () => {
    setIsModify(false);
  };

  return { isModify, onClickModifyButton, onClickCloseModifyButton };
};

export default useOpenModifyModal;
