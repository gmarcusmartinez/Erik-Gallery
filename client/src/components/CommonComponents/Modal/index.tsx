import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { renderForm } from './modalActions';
import { renderModalCloseBtn } from './ModalCloseBtn';

const Modal: React.FC = () => {
  const { toggleModal } = useActions();
  const { displayModal, component, darkmode } = useTypedSelector(
    (state) => state.modal
  );

  const className = `modal ${displayModal ? 'open' : 'closed'} ${
    darkmode ? 'darkmode' : ''
  }`;

  return ReactDOM.createPortal(
    <div className={className}>
      {renderModalCloseBtn(displayModal, toggleModal)}
      <div className='modal__body'>{renderForm(component)}</div>
    </div>,
    document.querySelector('#modal')!
  );
};

export default Modal;
