import React from "react";

interface IProps {
  message: string;
}

const Spinner: React.FC<IProps> = ({ message }) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-message">{message}</div>
      <div className="spinner-container "></div>
    </div>
  );
};

export default Spinner;
