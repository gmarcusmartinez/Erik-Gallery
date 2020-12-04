import React from "react";
import { connect } from "react-redux";
import { IPrint } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { fetchPrint } from "store/actions/prints/fetchPrint";

interface IProps {
  print: IPrint;
  toggleModal: Function;
  fetchPrint: Function;
}

const PrintItem: React.FC<IProps> = ({ print, toggleModal, fetchPrint }) => {
  const toggleDelete = () => toggleModal(true, "DELETE_PRINT", print);

  const toggleEdit = async () => {
    const printToUpdate = await fetchPrint(print._id);
    toggleModal(true, "EDIT_PRINT", printToUpdate);
  };

  const { description, price, size, quantityInStock } = print;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${print.mainImage})`;

  return (
    <div className="dash-print-item">
      <div className="dash-print-item__img" style={{ backgroundImage }}>
        <div className="mobile-dash-print__btns">
          <button className="mobile-dash-print__edit" onClick={toggleEdit}>
            Edit
          </button>
          <button className="mobile-dash-print__delete" onClick={toggleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="dash-print-item__text">{description}</div>
      <div className="dash-print-item__text">{size}</div>
      <div className="dash-print-item__text">{price}</div>
      <div className="dash-print-item__text">{quantityInStock}</div>
      <div className="dash-print-item__text edit" onClick={toggleEdit}>
        Edit
      </div>
      <div className="dash-print-item__text delete" onClick={toggleDelete}>
        &times;
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, fetchPrint })(PrintItem);
