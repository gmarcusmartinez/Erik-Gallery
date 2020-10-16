import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PrintsScreenContainer from "./Container";
import { fetchPrintsStart } from "store/actions/prints/fetchPrints";

interface IProps {
  fetchPrintsStart: Function;
}

const PrintsScreen: React.FC<IProps> = ({ fetchPrintsStart }) => {
  React.useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

  return (
    <div className="print-screen">
      <Route component={PrintsScreenContainer} />;
    </div>
  );
};

export default connect(null, { fetchPrintsStart })(PrintsScreen);
