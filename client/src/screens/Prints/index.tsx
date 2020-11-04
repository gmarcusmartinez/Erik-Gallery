import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import PrintsContainer from "./Container";

interface IProps {
  fetchPrints: Function;
  isOpen: boolean;
  count: number;
}

const Prints: React.FC<IProps> = ({ fetchPrints, isOpen, count }) => {
  useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

  return (
    <div className="prints-screen">
      <PrintsContainer />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  count: state.prints.count,
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { fetchPrints })(Prints);
