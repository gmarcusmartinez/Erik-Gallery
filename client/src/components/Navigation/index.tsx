import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Links from "./links";
import { toggleNav } from "store/actions/nav/toggleNav";

interface IProps {
  isOpen: boolean;
  toggleNav: Function;
}

const Navigation: React.FC<IProps> = ({ isOpen, toggleNav }) => {
  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link to="/" className="header__title">
          <span onClick={() => toggleNav(false)}>Erik Felfalusi</span>
        </Link>
        {isOpen && <Links />}
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { toggleNav })(Navigation);

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
