import React from "react";

interface IProps {
  breakpoint?: string;
  quantityInStock: number;
}

const AddToCartBtn: React.FC<IProps> = ({ breakpoint, quantityInStock }) => {
  const text = quantityInStock ? "Add to Cart" : "Sold Out";
  const btnBreakpoint = breakpoint ? breakpoint : "";

  return (
    <button
      className={`add-to-cart-btn ${btnBreakpoint}`}
      disabled={!quantityInStock}
    >
      {text}
    </button>
  );
};

export default AddToCartBtn;
