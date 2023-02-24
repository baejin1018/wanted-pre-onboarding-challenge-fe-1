import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { closeModal, isOpenModal, openModal };
};

export default useModal;
