import React, { FC } from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";
import { IPrint } from "interfaces";
import PrintItem from "components/DashboardComponents/PrintItem";
import BackgroundItem from "../BackgroundItem";

interface IProps {
  resourceType: string;
  formName: string;
  headers: { text: string }[];
  items: IPrint[];
  toggleModal: Function;
}

const Section: FC<IProps> = (props) => {
  const renderAddForm = () => props.toggleModal(true, props.formName, null);

  const list = renderDashItem(props.resourceType, props.items);

  return (
    <>
      <div className="resource-section">
        <div className="resource__headers">{renderHeaders(props.headers)}</div>
        {list}
      </div>
      <div className="add-resource-btn" onClick={renderAddForm}>
        {props.formName.replace("_", " ")}
      </div>
    </>
  );
};

export default connect(null, { toggleModal })(Section);

function renderHeaders(headers: { text: string }[]) {
  return headers.map((h, i) => <div key={i}>{h.text}</div>);
}

function renderDashItem(resourceType: string, items: any[]) {
  if (resourceType === "prints") {
    return items && items.map((i) => <PrintItem key={i._id} print={i} />);
  }
  if (resourceType === "backgrounds") {
    return (
      items && items.map((i) => <BackgroundItem key={i._id} background={i} />)
    );
  }
}
