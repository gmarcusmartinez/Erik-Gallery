import React from "react";

interface IProps {
  breakpoint?: string;
  quantityInStock: number;
  toggleViewPrint: Function;
}

const ViewProductBtn: React.FC<IProps> = ({
  breakpoint,
  quantityInStock,
  toggleViewPrint,
}) => {
  const text = quantityInStock ? "View Product" : "Sold Out";
  const btnBreakpoint = breakpoint ? breakpoint : "";

  const handleClick = (e: any) => {
    e.stopPropagation();
    toggleViewPrint();
  };

  return (
    <button
      className={`view-product-btn ${btnBreakpoint}`}
      disabled={!quantityInStock}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default ViewProductBtn;
