import React from "react";
import { connect } from "react-redux";
import { IState } from "interfaces/state";
import MobileNavLinks from "./MobileNavLinks";

interface IProps {
  open: boolean;
}
const Mobilenav: React.FC<IProps> = ({ open }) => {
  return (
    <div className={`m-nav ${open ? "open" : ""}`}>
      <MobileNavLinks />
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  open: state.nav.open,
});

export default connect(mapStateToProps, {})(Mobilenav);
