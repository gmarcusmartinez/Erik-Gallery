import Pagination from "components/Pagination";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { loading, printsPages } from "store/selectors/prints";

import PrintsList from "./List";
import PrintsLoading from "./Loading";

interface IProps {
  isLoading: boolean;
  pages: number;
}
const PrintsContainer: React.FC<IProps> = ({ isLoading, pages }) => {
  let display;
  if (isLoading) display = <PrintsLoading />;
  if (!isLoading) display = <PrintsList />;

  return (
    <div className="prints-container">
      {display}
      <Pagination root="prints" pages={pages} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: loading,
  pages: printsPages,
});

export default connect(mapStateToProps, {})(PrintsContainer);
