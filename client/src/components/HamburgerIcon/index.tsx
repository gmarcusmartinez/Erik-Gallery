import React from "react";
import { connect } from "react-redux";
import { IState } from "interfaces/state";
import { toggleNavOpen } from "store/actions/nav";

interface IProps {
  toggleNavOpen: Function;
  open: boolean;
}
const HamburgerIcon: React.FC<IProps> = ({ toggleNavOpen, open }) => {
  const className = `hamburger ${open ? "checked" : ""}`;

  return (
    <div className={className} onClick={() => toggleNavOpen()}>
      <div className="line"></div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  open: state.nav.open,
});

export default connect(mapStateToProps, { toggleNavOpen })(HamburgerIcon);
