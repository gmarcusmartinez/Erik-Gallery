import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPrintsStart } from "../../store/actions/prints";
import PrintsContainer from "./Container";

interface IProps {
  fetchPrintsStart: Function;
  isOpen: boolean;
}

const Prints: React.FC<IProps> = ({ fetchPrintsStart, isOpen }) => {
  useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

  return (
    <div className={`prints-screen ${isOpen ? "lock" : ""}`}>
      <PrintsContainer />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { fetchPrintsStart })(Prints);
