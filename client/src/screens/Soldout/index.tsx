import MainLayout from "layouts/MainLayout";
import React from "react";

const Soldout = () => {
  return (
    <MainLayout>
      <div className="logout-screen">
        <div className="logout-screen__info">
          <p>Sorry, One Or More Items in your cart has recently sold out.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Soldout;
