import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";
import { setActive } from "store/actions/backgrounds";
import { IBackground } from "interfaces";

interface IProps {
  bg: IBackground;
  toggleModal: Function;
  setActive: Function;
}

const BackgroundItem: React.FC<IProps> = (props) => {
  const { bg, toggleModal, setActive } = props;
  const toggleDelete = () => toggleModal(true, "DELETE_RESOURCE", bg);
  const handleSetActive = () => setActive(bg._id);

  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${bg.mainImage})`;
  const gridTemplateColumns = "10% 12% 13%";
  const pubClassName = `isPub ${bg.active ? "pub-true" : "pub-false"}`;

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div className={pubClassName}></div>
        <div className="mobile-dash__btns">
          <div className="mobile-dash__btn" onClick={handleSetActive}>
            Set Active
          </div>
          <div className="mobile-dash__btn" onClick={toggleDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className="dash-btn" onClick={handleSetActive}>
        Set Active
      </div>
      <div className="dash-btn" onClick={toggleDelete}>
        Delete
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, setActive })(BackgroundItem);
