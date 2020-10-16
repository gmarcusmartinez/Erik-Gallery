import React from "react";

const headerBlocks = ["", "Item", "Quantity", "Price", ""];
const headers = headerBlocks.map((hb, i) => (
  <div className="header" key={i}>
    {hb}
  </div>
));

const CartScreen = () => {
  return (
    <div className="cart-screen">
      {/* <div className="cart-screen__headers">{headers}</div> */}
    </div>
  );
};

export default CartScreen;
