import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleModal } from "store/actions/modal/toggleModal";
import {
  selectModalComponent,
  selectModalIsOpen,
  selectDarkMode,
} from "store/selectors/modal";
import { renderForm } from "./modalActions";
import { renderModalCloseBtn } from "./ModalCloseBtn";

interface IProps {
  darkmode?: boolean;
  toggleModal: Function;
  displayModal: boolean;
  component: string;
}
const Modal: React.FC<IProps> = (props) => {
  const { toggleModal, displayModal, component, darkmode } = props;

  const className = `modal ${displayModal ? "open" : "closed"} ${
    darkmode ? "darkmode" : ""
  }`;

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
  darkmode: selectDarkMode,
});

export default connect(mapStateToProps, { toggleModal })(Modal);
