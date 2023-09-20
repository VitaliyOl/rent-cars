import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import icon from '../../images/sprite.svg';
import { CloseButton } from './Modal.styled';

function Modal({ onClose, children, isOpen }) {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal">
            <CloseButton onClick={handleClose}>
              <svg className="icon">
                <use href={`${icon}#icon-close`}></use>
              </svg>
            </CloseButton>
            {children}
          </div>
        </div>,
        document.getElementById('modal')
      )
    : null;
}

export default Modal;
