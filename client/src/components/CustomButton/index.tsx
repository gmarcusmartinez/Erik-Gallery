import React from "react";

interface IProps {
  onClick?: any;
  type?: string;
  margin?: string;
}

const CustomButton: React.FC<IProps> = ({
  children,
  type,
  margin,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      type={type ? "button" : "submit"}
      style={margin ? { margin } : { margin: "" }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
