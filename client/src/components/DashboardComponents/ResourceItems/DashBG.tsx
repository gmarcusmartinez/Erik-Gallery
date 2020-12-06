import React from "react";

interface IProps {
  background: any;
}
const BackgroundItem: React.FC<IProps> = ({ background }) => {
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${background.image})`;
  const gridTemplateColumns = "10% 15% 15%";

  return (
    <div className="dash-item" style={{ gridTemplateColumns }}>
      <div className="dash-item__img" style={{ backgroundImage }}>
        <div className="mobile-dash__btns">
          <button className="mobile-dash__edit" onClick={() => {}}>
            Set Active
          </button>
          <button className="mobile-dash__delete" onClick={() => {}}>
            Delete
          </button>
        </div>
      </div>

      <input
        type="radio"
        className="dash-item__text edit"
        style={{ justifySelf: "center", marginTop: "2rem" }}
      />
      <div className="dash-item__text delete" onClick={() => {}}>
        &times;
      </div>
    </div>
  );
};

export default BackgroundItem;
