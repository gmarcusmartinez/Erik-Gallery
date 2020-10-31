import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { renderForm } from "./modalActions";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  toggleModal: Function;
  displayModal: boolean;
  component: string;
  id: string;
}
const Modal: React.FC<IProps> = ({
  toggleModal,
  displayModal,
  component,
  id,
}) => {
  const className = `modal ${displayModal ? "open" : "closed"}`;

  return ReactDOM.createPortal(
    <div className={className}>
      {renderModalCloseBtn(displayModal, toggleModal)}
      <div className="modal__body">{renderForm(component, id)}</div>
    </div>,
    document.querySelector("#modal")!
  );
};

const mapStateToProps = (state: any) => ({
  displayModal: state.modal.displayModal,
  component: state.modal.component,
  id: state.modal.id,
});

export default connect(mapStateToProps, { toggleModal })(Modal);

const renderModalCloseBtn = (bool: boolean, cb: Function) => (
  <div className="modal__close-btn" onClick={() => cb(false)}>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
    <div className={`modal__bar ${bool ? "cross" : ""}`}></div>
  </div>
);
