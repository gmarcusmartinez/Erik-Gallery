import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { renderLinks } from "./links";
import { toggleNav } from "../../store/actions/nav/toggleNav";
import CartIcon from "../CartIcon";

const Navigation = ({ isOpen, toggleNav }) => {
  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link href="/">
          <a className="header__title">Erik Felfalusi</a>
        </Link>
        <CartIcon />
      </div>
      <ul className={`mobile-navigation ${isOpen ? "open" : "closed"}`}>
        {renderLinks(isOpen, toggleNav)}
      </ul>
    </>
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
