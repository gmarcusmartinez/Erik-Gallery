import React, { MouseEvent } from "react";

interface IProps {
  breakpoint?: string;
  quantityInStock: number;
  toggleViewPrint: Function;
  customStyle?: { display: string; margin: string };
}

const ViewProductBtn: React.FC<IProps> = (props) => {
  const text = props.quantityInStock ? "View Product" : "Sold Out";
  const btnBreakpoint = props.breakpoint ? props.breakpoint : "";

  const style = props.customStyle ? props.customStyle : {};

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    props.toggleViewPrint();
  };

  return (
    <button
      className={`view-product-btn ${btnBreakpoint}`}
      disabled={!props.quantityInStock}
      onClick={handleClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default ViewProductBtn;
