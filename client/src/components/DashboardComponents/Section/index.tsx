import React, { FC } from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";
import { IPrint, IZine } from "interfaces";
import BackgroundItem from "../ResourceItems/DashBG";
import PrintItem from "../ResourceItems/DashPrint";
import ZineItem from "../ResourceItems/DashZine";

interface IProps {
  resourceType: string;
  formName: string;
  headers: { text: string }[];
  items: IPrint[] | IZine[];
  toggleModal: Function;
  gridTemplateColumns: string;
}

const Section: FC<IProps> = (props) => {
  const renderAddForm = () => props.toggleModal(true, props.formName, null);
  const list = renderDashItem(props.resourceType, props.items);

  const gridTemplateColumns = props.gridTemplateColumns;
  return (
    <div className="resources">
      <div className="resource-section">
        <div className="resource__headers" style={{ gridTemplateColumns }}>
          {renderHeaders(props.headers)}
        </div>
        {list}
      </div>
      <div className="add-resource-btn" onClick={renderAddForm}>
        <span>&#43;</span>
      </div>
    </div>
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
  if (resourceType === "zines") {
    return items && items.map((i) => <ZineItem key={i._id} zine={i} />);
  }
}
