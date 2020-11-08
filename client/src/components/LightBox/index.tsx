import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  setDisplayLightbox: Function;
}
const Lghtbox: React.FC<IProps> = () => {
  return ReactDOM.createPortal(
    <div className="lightbox">
      <div className="lightbox__body"></div>
    </div>,
    document.querySelector("#lightbox")!
  );
};

export default Lghtbox;
