import React from "react";

const CartDropDown = () => {
  const emptyMsg = <span className="empty-message">Your cart is empty</span>;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{emptyMsg}</div>
    </div>
  );
};

export default CartDropDown;
