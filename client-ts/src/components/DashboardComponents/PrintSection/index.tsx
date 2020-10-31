import PrintItem from "components/DashboardComponents/PrintItem";
import React from "react";
import { connect } from "react-redux";
import { fetchPrintsStart } from "store/actions/prints/fetchPrints";

interface IProps {
  fetchPrintsStart: Function;
  prints: any[];
}

const PrintSection: React.FC<IProps> = ({ fetchPrintsStart, prints }) => {
  React.useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

  const printItems = prints && prints.map((p) => <PrintItem print={p} />);

  return (
    <div className="prints-section">
      <div className="prints-section-headers">
        <div>Image</div>
        <div className="tablet-header">Desc</div>
        <div className="tablet-header">Size</div>
        <div className="tablet-header">Price</div>
        <div className="tablet-header">In Stock</div>
        <div>&#9998;</div>
        <div style={{ fontSize: "2rem" }}>&times;</div>
      </div>
      {printItems}
    </div>
  );
};

const mapStateToProps = (state: any) => ({ prints: state.prints.items });
export default connect(mapStateToProps, { fetchPrintsStart })(PrintSection);
