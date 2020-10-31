import React from "react";
import { connect } from "react-redux";
import { deletePrintsStart } from "store/actions/prints";

interface IProps {
  print: any;
  deletePrintsStart: Function;
}

const PrintItem: React.FC<IProps> = ({ print, deletePrintsStart }) => {
  return (
    <div className="dash-print-item">
      <img className="dash-print-item__img" src={print.image} alt="print" />
      <div className="dash-print-item__text tablet-field">
        {print.description}
      </div>
      <div className="dash-print-item__text tablet-field">{print.size}</div>
      <div className="dash-print-item__text tablet-field">
        {String(print.price)}
      </div>
      <div className="dash-print-item__text tablet-field">
        {print.inStock ? "√" : "-"}
      </div>
      <div className="dash-print-item__text edit">&#9998;</div>
      <div
        className="dash-print-item__text delete"
        onClick={() => deletePrintsStart(print._id)}
      >
        &times;
      </div>
    </div>
  );
};

export default connect(null, { deletePrintsStart })(PrintItem);
