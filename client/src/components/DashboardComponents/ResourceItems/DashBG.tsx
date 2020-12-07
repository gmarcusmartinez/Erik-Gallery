import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  background: any;
  toggleModal: Function;
}

const BackgroundItem: React.FC<IProps> = ({ background, toggleModal }) => {
  const toggleDelete = () => toggleModal(true, "DELETE_RESOURCE", background);

  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${background.mainImage})`;
  const gridTemplateColumns = "10% 15% 15%";

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div className="mobile-dash__btns">
          <div className="mobile-dash__btn" onClick={() => {}}>
            Set Active
          </div>
          <div className="mobile-dash__btn" onClick={toggleDelete}>
            Delete
          </div>
        </div>
      </div>

      <div
        className="dash-btn"
        onClick={() => {}}
        style={{ textAlign: "center" }}
      >
        Set Active
      </div>
      <div className="dash-btn" onClick={toggleDelete}>
        Delete
      </div>
    </div>
  );
};

export default connect(null, { toggleModal })(BackgroundItem);
