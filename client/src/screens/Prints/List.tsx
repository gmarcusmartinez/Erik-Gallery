import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllPrints } from "store/selectors/prints";
import PrintItem from "components/PrintItem";

interface IProps {
  items: any[];
}

const PrintsList: React.FC<IProps> = ({ items }) => {
  let printsList;
  if (items)
    printsList = items.map((p: any) => <PrintItem key={p._id} item={p} />);

  return <>{printsList}</>;
};

const mapStateToProps = createStructuredSelector({
  items: selectAllPrints,
});

export default connect(mapStateToProps, {})(PrintsList);
