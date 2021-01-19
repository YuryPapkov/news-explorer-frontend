import React from 'react';
import PopupWithForm from '../PopupWithForm/popupWithForm.js';
import useFormValidation from '../../utils/useFormValidation.js';

function Login({ isOpen, onClose, onSubmit, errorText }) {
  const validator = useFormValidation();
  const handleChange = (e) => {
    validator.handleChange(e);
    console.log(validator.errors);
  }

  return (
    <PopupWithForm
      title='Вход'
      name='register'
      submitText='Войти'
      redirectText='Зарегистрироваться'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      errorText={errorText}
      isValid={validator.isValid}>
      <p className="popup__input-title">Email</p>
      <input
        name="email"
        className="popup__input"
        type="email"
        required
        autoComplete="off"
        onChange={handleChange}
      />
      <span className="popup__error">{validator.errors.email}</span>

      <p className="popup__input-title">Пароль</p>
      <input
        name="password"
        className="popup__input"
        type="password"
        required
        minLength='1'
        autoComplete="off"
        onChange={handleChange}
      />
      <span className="popup__error ">{validator.errors.password}</span>
    </PopupWithForm>
  );
}
export default Login;