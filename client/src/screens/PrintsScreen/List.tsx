import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { IPrint } from "interfaces";
import Print from "components/Print";
import { selectAllPrints } from "store/selectors/prints";

interface IProps {
  items: IPrint[];
}

const PrintList: React.FC<IProps> = ({ items }) => {
  let printItems = items.map((p) => <Print key={p._id} print={p} />);
  return <div className="prints">{printItems}</div>;
};

const mapStateToProps = createStructuredSelector({
  items: selectAllPrints,
});

export default connect(mapStateToProps, {})(PrintList);
