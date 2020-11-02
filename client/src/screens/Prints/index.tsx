import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPrints } from "store/actions/prints/fetchPrints";
import PrintsContainer from "./Container";

interface IProps {
  fetchPrints: Function;
  isOpen: boolean;
}

const Prints: React.FC<IProps> = ({ fetchPrints, isOpen }) => {
  useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

  return (
    <div className={`prints-screen ${isOpen ? "lock" : ""}`}>
      <PrintsContainer />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { fetchPrints })(Prints);
