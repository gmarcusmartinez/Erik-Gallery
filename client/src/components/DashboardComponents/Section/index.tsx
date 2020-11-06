import React, { FC } from "react";
import { connect } from "react-redux";
import ToggleDisplayResource from "./ToggleDisplayResource";
import { toggleModal } from "store/actions/modal/toggleModal";
import { IPrint } from "interfaces";
import PrintItem from "components/DashboardComponents/PrintItem";

interface IProps {
  sectionTitle: string;
  formName: string;
  headers: { text: string }[];
  fetchResource: Function;
  items: IPrint[];
  toggleModal: Function;
}
const Section: FC<IProps> = ({
  sectionTitle,
  formName,
  headers,
  fetchResource,
  items,
  toggleModal,
}) => {
  const [displayResources, setDisplayReources] = React.useState(false);
  const renderAddForm = () => toggleModal(true, formName, null);

  React.useEffect(() => {
    fetchResource();
  }, [fetchResource]);

  const list = renderDashItem(sectionTitle, items);

  return (
    <div className="resource-section">
      <div className="resource-section__actions">
        <ToggleDisplayResource
          bool={displayResources}
          toggle={setDisplayReources}
          title={sectionTitle}
        />
        <div className="add-resource-btn" onClick={renderAddForm}>
          {formName.replace("_", " ")}
        </div>
      </div>

      <div className={`resource ${displayResources ? "show" : ""}`}>
        <div className="resource__headers">{renderHeaders(headers)}</div>
        {list}
      </div>
    </div>
  );
};

export default connect(null, { toggleModal })(Section);

function renderHeaders(headers: { text: string }[]) {
  return headers.map((h, i) => <div key={i}>{h.text}</div>);
}

function renderDashItem(sectionTitle: string, items: any[]) {
  if (sectionTitle === "Prints") {
    return items && items.map((i) => <PrintItem key={i._id} print={i} />);
  }
}
