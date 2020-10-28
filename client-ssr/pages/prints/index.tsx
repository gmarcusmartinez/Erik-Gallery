import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";

const Prints = ({ fetchPrints }) => {
  useEffect(() => {
    fetchPrints();
  }, []);
  return <div className="prints"></div>;
};

const mapStateToProps = (state) => ({
  prints: state.prints,
});

export default connect(mapStateToProps, { fetchPrints })(Prints);
