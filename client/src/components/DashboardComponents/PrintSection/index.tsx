import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint } from "interfaces";
import PrintItem from "components/DashboardComponents/PrintItem";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { toggleModal } from "store/actions/modal/toggleModal";
import { selectAllPrints } from "store/selectors/prints";

interface IProps {
  fetchPrints: Function;
  toggleModal: Function;
  items: any;
}

const PrintSection: React.FC<IProps> = ({
  fetchPrints,
  items,
  toggleModal,
}) => {
  const renderPrintForm = () => toggleModal(true, "ADD_PRINT", null);

  React.useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

  const printItems =
    items && items.map((p: IPrint) => <PrintItem key={p._id} print={p} />);

  return (
    <div className="prints-section">
      <div className="prints-section-headers">
        <div>Image</div>
        <div className="tablet-header">Desc</div>
        <div className="tablet-header">Size</div>
        <div>Price</div>
        <div className="tablet-header">In Stock</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {printItems}
      <div className="add-print-btn" onClick={renderPrintForm}>
        Add Print
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ items: selectAllPrints });
export default connect(mapStateToProps, { fetchPrints, toggleModal })(
  PrintSection
);
