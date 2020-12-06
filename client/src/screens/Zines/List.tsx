import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllZines } from "store/selectors/zines";
import ZineItem from "components/ZineItem";

interface IProps {
  items: any[];
}

const ZinesList: React.FC<IProps> = ({ items }) => {
  let list;
  if (items) list = items.map((p: any) => <ZineItem key={p._id} item={p} />);
  return <>{list}</>;
};

const mapStateToProps = createStructuredSelector({
  items: selectAllZines,
});

export default connect(mapStateToProps, {})(ZinesList);
