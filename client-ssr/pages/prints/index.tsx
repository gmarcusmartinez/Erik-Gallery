import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPrintsStart } from "store/actions/prints/fetchPrints";
import PrintsContainer from "./Container";
// import { createStructuredSelector } from "reselect";
// import { selectAllPrints } from "store/selectors/prints";

interface IProps {
  fetchPrintsStart: Function;
  isOpen: boolean;
}
const Prints: React.FC<IProps> = ({ fetchPrintsStart, isOpen }) => {
  useEffect(() => {
    fetchPrintsStart();
  }, []);

  return (
    <div className={`prints-screen ${isOpen ? "lock" : ""}`}>
      <PrintsContainer />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isOpen: state.nav.isOpen,
// });

export default connect(null, { fetchPrintsStart })(Prints);
