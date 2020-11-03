import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint } from "interfaces";
import PrintItem from "components/DashboardComponents/PrintItem";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import { toggleModal } from "store/actions/modal/toggleModal";
import { selectAllPrints } from "store/selectors/prints";
import { renderHeaders } from "./helpers";
import ToggleDisplayPrints from "./ToggleDisplayPrints";

interface IProps {
  fetchPrints: Function;
  toggleModal: Function;
  items?: any[];
}

const PrintSection: React.FC<IProps> = ({
  fetchPrints,
  items,
  toggleModal,
}) => {
  const [displayPrints, setDisplayPrints] = React.useState(false);
  const renderAddPrintForm = () => toggleModal(true, "ADD_PRINT", null);

  React.useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

  const printItems =
    items && items.map((p: IPrint) => <PrintItem key={p._id} print={p} />);

  return (
    <div className="prints-section">
      <div className="prints-section__actions">
        <ToggleDisplayPrints bool={displayPrints} toggle={setDisplayPrints} />

        <div className="add-print-btn" onClick={renderAddPrintForm}>
          Add Print
        </div>
      </div>

      <div className={`dash-prints ${displayPrints ? "show" : ""}`}>
        <div className="dash-prints__headers">{renderHeaders()}</div>
        {printItems}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ items: selectAllPrints });
export default connect(mapStateToProps, { fetchPrints, toggleModal })(
  PrintSection
);
