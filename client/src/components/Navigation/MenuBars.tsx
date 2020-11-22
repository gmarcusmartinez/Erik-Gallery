import React from "react";

interface MenuBarsProps {
  bool: boolean;
  cb: Function;
}

const MenuBars: React.FC<MenuBarsProps> = ({ bool, cb }) => {
  return (
    <div className="menu-bars" onClick={() => cb(!bool)}>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
    </div>
  );
};

export default MenuBars;
