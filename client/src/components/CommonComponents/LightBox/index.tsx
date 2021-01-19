import React, { FC } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLightboxlIsOpen, selectImage } from "store/selectors/lightbox";
import { toggleLightbox } from "store/actions/lightbox/toggleLightbox";

interface IProps {
  displayLightbox: boolean;
  toggleLightbox: Function;
  image: string;
}

const Lightbox: FC<IProps> = ({ displayLightbox, toggleLightbox, image }) => {
  const className = `lightbox ${displayLightbox ? "lb-open" : "lb-closed"}`;

  return ReactDOM.createPortal(
    <div className={className}>
      {renderLighboxCloseBtn(displayLightbox, toggleLightbox)}
      <div className="lightbox__image" style={{ backgroundImage: image }} />
    </div>,
    document.querySelector("#lightbox")!
  );
};

const mapStateToProps = createStructuredSelector({
  displayLightbox: selectLightboxlIsOpen,
  image: selectImage,
});

export default connect(mapStateToProps, { toggleLightbox })(Lightbox);

const renderLighboxCloseBtn = (bool: boolean, cb: Function) => (
  <div className="lightbox__close-btn" onClick={() => cb(false)}>
    <div className={`lightbox__bar ${bool ? "cross" : ""}`}></div>
    <div className={`lightbox__bar ${bool ? "cross" : ""}`}></div>
    <div className={`lightbox__bar ${bool ? "cross" : ""}`}></div>
  </div>
);
