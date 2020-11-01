import React from "react";
import { connect } from "react-redux";
import { IPrint } from "../../../interfaces";
import { toggleModal } from "../../../store/actions/modal/toggleModal";

interface IProps {
  print: IPrint;
  toggleModal: Function;
}

const PrintItem: React.FC<IProps> = ({ print, toggleModal }) => {
  const { description, price, size, inStock } = print;
  const imageUrl = `https://erik-gallery.s3-us-west-1.amazonaws.com/${print.image}`;

  return (
    <div className="dash-print-item">
      <img className="dash-print-item__img" src={imageUrl} alt="print" />
      <div className="dash-print-item__text tablet-field">{description}</div>
      <div className="dash-print-item__text tablet-field">{size}</div>
      <div className="dash-print-item__text">{String(price)}</div>
      <div className="dash-print-item__text tablet-field">
        {inStock ? "√" : "-"}
      </div>
      <div className="dash-print-item__text edit">&#9998;</div>
      <div
        className="dash-print-item__text delete"
        onClick={() => toggleModal(true, "DELETE_PRINT", print)}
      >
        &times;
      </div>
    </div>
  );
};

export default connect(null, { toggleModal })(PrintItem);
