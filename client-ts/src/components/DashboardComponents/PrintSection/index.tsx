import PrintItem from "components/DashboardComponents/PrintItem";
import { IPrint } from "interfaces";
import React from "react";
import { connect } from "react-redux";
import { fetchPrintsStart } from "store/actions/prints";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  fetchPrintsStart: Function;
  toggleModal: Function;
  items: any;
}

const PrintSection: React.FC<IProps> = ({
  fetchPrintsStart,
  items,
  toggleModal,
}) => {
  const renderPrintForm = () => toggleModal(true, "ADD_PRINT", null);

  React.useEffect(() => {
    fetchPrintsStart();
  }, [fetchPrintsStart]);

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

const mapStateToProps = (state: any) => ({
  items: Object.values(state.prints.items),
});

export default connect(mapStateToProps, { fetchPrintsStart, toggleModal })(
  PrintSection
);
