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

  const { description, price, size, quantityInStock, isPublished } = print;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${print.mainImage})`;
  const gridTemplateColumns = "10% 31% 15% 7% 7% 7% 7% 8% 8%";

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div
          className={`isPub ${isPublished ? "pub-true" : "pub-false"}`}
        ></div>
        <div className="mobile-dash__btns">
          <div className="mobile-dash__btn" onClick={toggleEdit}>
            Edit
          </div>
          <div className="mobile-dash__btn" onClick={toggleDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className="dash-item__text" style={{ marginLeft: "0.5rem" }}>
        {description}
      </div>
      <div className="dash-item__text">{size}</div>
      <div className="dash-item__text">{price}&euro;</div>
      <div className="dash-item__text">{print.netPrice}&euro;</div>
      <div className="dash-item__text">{print.vatPrice}&euro;</div>
      <div className="dash-item__text">{quantityInStock}</div>
      <div className="dash-btn" onClick={toggleEdit}>
        Edit
      </div>
      <div className="dash-btn" onClick={toggleDelete}>
        Delete
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, fetchPrint })(PrintItem);
