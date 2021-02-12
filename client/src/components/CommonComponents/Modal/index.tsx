import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { renderForm } from './ModalActions';

const Modal: React.FC = () => {
  const { toggleModal } = useActions();
  const { displayModal, component } = useTypedSelector((state) => state.modal);
  const handleCloseModal = () => toggleModal(false, null);

  return ReactDOM.createPortal(
    <div className={`modal ${displayModal ? 'open' : 'closed'}`}>
      <div className='modal__close-btn' onClick={handleCloseModal}>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
      </div>
      <div className='modal__body'>{renderForm(component)}</div>
    </div>,
    document.querySelector('#modal')!
  );
};

export default Modal;
