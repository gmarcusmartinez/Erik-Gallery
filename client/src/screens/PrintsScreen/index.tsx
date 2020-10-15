import React from "react";
import { connect } from "react-redux";

import { IPrintsState } from "interfaces/state";
import { fetchPrintsStart } from "store/actions/prints/fetchPrints";
import PrintList from "./List";

interface IProps {
  fetchPrintsStart: Function;
  prints: IPrintsState;
}

const PrintsScreen: React.FC<IProps> = ({ fetchPrintsStart }) => {
  React.useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

  return (
    <div>
      <PrintList />
    </div>
  );
};

export default connect(null, { fetchPrintsStart })(PrintsScreen);
