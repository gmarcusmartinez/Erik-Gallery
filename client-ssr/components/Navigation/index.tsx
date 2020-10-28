import React from "react";
import { connect } from "react-redux";
import { renderLinks } from "./links";
import { toggleNav } from "../../store/actions/nav/toggleNav";

const Navigation = ({ isOpen, toggleNav }) => {
  return (
    <div className="header">
      <MenuBars bool={isOpen} cb={toggleNav} />
      <ul className={`mobile-navigation ${isOpen ? "open" : "closed"}`}>
        {renderLinks(isOpen, toggleNav)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { toggleNav })(Navigation);

const MenuBars = ({ bool, cb }) => {
  return (
    <div className="menu-bars" onClick={() => cb(!bool)}>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
    </div>
  );
};
