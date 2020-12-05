import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllPrints } from "store/selectors/prints";
// import PrintItem from "components/PrintItem";

interface IProps {
  items: any[];
}

const ZinesList: React.FC<IProps> = ({ items }) => {
  //   let printsList;
  //   if (items)
  //     printsList = items.map((p: any) => <PrintItem key={p._id} item={p} />);

  return <></>;
};

const mapStateToProps = createStructuredSelector({
  items: selectAllPrints,
});

export default connect(mapStateToProps, {})(ZinesList);
