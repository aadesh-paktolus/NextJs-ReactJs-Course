import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const handleClose = () => navigate("..");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleClose}
    >
      <div
        className="bg-white w-1/3 absolute top-1/4 left-1/3 px-5 py-3 flex flex-col items-center rounded-lg"
        onClick={handleModalClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
