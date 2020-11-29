import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { loading } from "store/selectors/prints";

import PrintsList from "./List";
import PrintsLoading from "./Loading";

interface IProps {
  isLoading: boolean;
}
const PrintsContainer: React.FC<IProps> = ({ isLoading }) => {
  let display;
  if (isLoading) display = <PrintsLoading />;
  if (!isLoading) display = <PrintsList />;

  return <div className="prints-container">{display}</div>;
};

const mapStateToProps = createStructuredSelector({ isLoading: loading });

export default connect(mapStateToProps, {})(PrintsContainer);
