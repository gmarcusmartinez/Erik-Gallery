import React from "react";
import { connect } from "react-redux";
import { IZine } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { fetchZine } from "store/actions/zines";

interface IProps {
  zine: IZine;
  toggleModal: Function;
  fetchZine: Function;
}

const ZineItem: React.FC<IProps> = ({ zine, toggleModal, fetchZine }) => {
  const toggleDelete = () => toggleModal(true, "DELETE_RESOURCE", zine);

  const toggleEdit = async () => {
    const zineToUpdate = await fetchZine(zine._id);
    toggleModal(true, "EDIT_ZINE", zineToUpdate);
  };

  const { title, price, quantityInStock } = zine;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${zine.mainImage})`;
  const gridTemplateColumns = "10% 25% 15% 10% 10% 10% 10%";

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
        {title}
      </div>
      <div className="dash-item__text">{price}</div>
      <div className="dash-item__text">{quantityInStock}</div>
      <div className="dash-item__text edit" onClick={toggleEdit}>
        Edit
      </div>
      <div className="dash-item__text delete" onClick={toggleDelete}>
        &times;
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, fetchZine })(ZineItem);
