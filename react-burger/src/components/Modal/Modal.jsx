import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import modalStyles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal({ isOpen, onClose, children, modalClassName = '' }) {
  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Сам портал, используем modal-root
  return ReactDOM.createPortal(
    <div className={modalStyles.modalOverlay} onClick={handleOverlayClick}>
      <div className={`${modalStyles.modalContent} pt-15 pb-15 pr-10 pl-10 ${modalClassName}`}>
        <button className={modalStyles.modalClose} onClick={onClose} aria-label="Закрыть модалку">
          <CloseIcon type="primary" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modalClassName: PropTypes.string,
};

export default Modal;
