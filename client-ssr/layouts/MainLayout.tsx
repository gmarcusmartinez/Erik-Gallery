import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="bg-image">{children}</div>
    </div>
  );
};

export default MainLayout;
