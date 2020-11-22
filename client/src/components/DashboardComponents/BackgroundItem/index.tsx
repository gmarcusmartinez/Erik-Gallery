import React from "react";

interface IProps {
  background: any;
}
const BackgroundItem: React.FC<IProps> = ({ background }) => {
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${background.image})`;

  return (
    <div className="bg-item">
      <div className="bg-item__img" style={{ backgroundImage }}>
        <div className="mobile-bg-item__btns">
          <button className="mobile-bg-item__edit" onClick={() => {}}>
            Set Active
          </button>
          <button className="mobile-bg-item__delete" onClick={() => {}}>
            Delete
          </button>
        </div>
      </div>

      <div className="dash-print-item__text edit" onClick={() => {}}>
        <input type="radio" />
      </div>
      <div className="dash-print-item__text delete" onClick={() => {}}>
        &times;
      </div>
    </div>
  );
};

export default BackgroundItem;
