import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  print: any;
  toggleModal: Function;
}

const PrintItem: React.FC<IProps> = ({ print, toggleModal }) => {
  const imageUrl = `https://erik-gallery.s3-us-west-1.amazonaws.com/${print.image}`;

  return (
    <div className="dash-print-item">
      <img className="dash-print-item__img" src={imageUrl} alt="print" />
      <div className="dash-print-item__text tablet-field">
        {print.description}
      </div>
      <div className="dash-print-item__text tablet-field">{print.size}</div>
      <div className="dash-print-item__text">{String(print.price)}</div>
      <div className="dash-print-item__text tablet-field">
        {print.inStock ? "√" : "-"}
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
const mapStateToProps = (state: any) => ({
  displayModal: state.modal.displayModal,
});

export default connect(mapStateToProps, { toggleModal })(PrintItem);
