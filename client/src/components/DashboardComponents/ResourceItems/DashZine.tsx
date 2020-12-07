import React from "react";
import { connect } from "react-redux";
import { IZine } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { fetchZine } from "store/actions/zines";
import { useHistory } from "react-router-dom";

interface IProps {
  zine: IZine;
  toggleModal: Function;
  fetchZine: Function;
}

const ZineItem: React.FC<IProps> = ({ zine, toggleModal, fetchZine }) => {
  const toggleDelete = () => toggleModal(true, "DELETE_RESOURCE", zine);

  const toggleEdit = async (formType: string) => {
    const zineToUpdate = await fetchZine(zine._id);
    toggleModal(true, formType, zineToUpdate);
  };

  const { title, price, quantityInStock } = zine;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${zine.mainImage})`;
  const gridTemplateColumns = "10% 25% 15% 10% 10% 10% 10%";

  const history = useHistory();
  const handleRedirect = () => history.push(`/dashboard/zine/${zine._id}`);
  const handleToggleEdit = () => toggleEdit("EDIT_ZINE");

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div className="mobile-dash__btns">
          <div className="mobile-dash__btn" onClick={handleRedirect}>
            Images
          </div>
          <div className="mobile-dash__btn" onClick={handleToggleEdit}>
            Edit
          </div>
          <div className="mobile-dash__btn" onClick={toggleDelete}>
            Delete
          </div>
        </div>
      </div>

      <div className="dash-item__text" style={{ marginLeft: "0.5rem" }}>
        {title}
      </div>

      <div className="dash-item__text">{price}</div>
      <div className="dash-item__text">{quantityInStock}</div>

      <div className="dash-btn" onClick={handleRedirect}>
        View
      </div>
      <div className="dash-btn" onClick={handleToggleEdit}>
        Edit
      </div>
      <div className="dash-btn" onClick={toggleDelete}>
        Delete
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, fetchZine })(ZineItem);
