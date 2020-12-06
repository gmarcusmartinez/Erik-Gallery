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
  const toggleDelete = () => toggleModal(true, "DELETE_RESOURCE", print);

  const toggleEdit = async () => {
    const printToUpdate = await fetchPrint(print._id);
    toggleModal(true, "EDIT_PRINT", printToUpdate);
  };

  const { description, price, size, quantityInStock } = print;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${print.mainImage})`;
  const gridTemplateColumns = "8% 37% 15% 10% 10% 10% 10%";

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div className="mobile-dash__btns">
          <button className="mobile-dash__edit" onClick={toggleEdit}>
            Edit
          </button>
          <button className="mobile-dash__delete" onClick={toggleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="dash-item__text" style={{ marginLeft: "0.5rem" }}>
        {description}
      </div>
      <div className="dash-item__text">{size}</div>
      <div className="dash-item__text">{price}</div>
      <div className="dash-item__text">{quantityInStock}</div>
      <div className="dash-btn" onClick={toggleEdit}>
        Edit
      </div>
      <div className="dash-item__text delete" onClick={toggleDelete}>
        &times;
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, fetchPrint })(PrintItem);
