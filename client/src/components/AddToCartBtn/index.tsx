import React from "react";

interface IProps {
  breakpoint?: string;
  quantityInStock: number;
}

const AddToCartBtn: React.FC<IProps> = ({ breakpoint, quantityInStock }) => {
  const text = quantityInStock ? "Add to Cart" : "Sold Out";
  const btnBreakpoint = breakpoint ? breakpoint : "";
  const handleClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <button
      className={`add-to-cart-btn ${btnBreakpoint}`}
      disabled={!quantityInStock}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default AddToCartBtn;
