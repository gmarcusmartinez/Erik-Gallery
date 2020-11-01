import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { renderForm } from "./modalActions";
import { toggleModal } from "store/actions/modal/toggleModal";
import { createStructuredSelector } from "reselect";
import { selectModalComponent, selectModalIsOpen } from "store/selectors/modal";

interface IProps {
  toggleModal: Function;
  displayModal: boolean;
  component: string;
}
const Modal: React.FC<IProps> = ({ toggleModal, displayModal, component }) => {
  const className = `modal ${displayModal ? "open" : "closed"}`;

  return ReactDOM.createPortal(
    <div className={className}>
      {renderModalCloseBtn(displayModal, toggleModal)}
      <div className="modal__body">{renderForm(component)}</div>
    </div>,
    document.querySelector("#modal")!
  );
};

const mapStateToProps = createStructuredSelector({
  displayModal: selectModalIsOpen,
  component: selectModalComponent,
});

export default connect(mapStateToProps, { toggleModal })(Modal);

const renderModalCloseBtn = (bool: boolean, cb: Function) => (
  <div className="modal__close-btn" onClick={() => cb(false)}>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
  </div>
);
