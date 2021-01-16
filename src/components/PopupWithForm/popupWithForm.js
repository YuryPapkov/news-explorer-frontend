import React from 'react';
import closeButtonPath from '../../images/close.svg';

function PopupWithForm({ title, name, submitText, redirectText, isOpen, onClose, onSubmit, children }) {
  const className = `popup ${isOpen && 'popup_opened'}`;
  return (
    <div className={className}>
      <form
        name={name}
        onSubmit={onSubmit}
        className="popup__container"
        noValidate>
        <p className="popup__text">{title}</p>
        {children}
        <button
          type="submit"
          className="popup__save-button">
          {submitText}
        </button>
        <p>или <button className="popup__redirect-button">{redirectText}</button></p>
        <button
          type="reset"
          className="popup__close-button"
          onClick={onClose}>
          <img src={closeButtonPath} alt="закрыть" />
        </button>
      </form>
    </div>
  );
}
export default PopupWithForm;