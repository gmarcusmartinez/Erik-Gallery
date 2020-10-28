import React from "react";

const CartDropDown = () => {
  const emptyMsg = <span className="empty-message">Your cart is empty</span>;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{emptyMsg}</div>
      {/* <CustomButton onClick={handleRedirect}>Go to Checkout</CustomButton> */}
    </div>
  );
};

export default CartDropDown;
//{cartItems.length ? list : emptyMsg}
