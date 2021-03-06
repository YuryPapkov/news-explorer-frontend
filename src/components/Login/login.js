import React from 'react';
import PopupWithForm from '../PopupWithForm/popupWithForm.js';
import useFormValidation from '../../utils/useFormValidation.js';

function Login({ isOpen, onClose, onSubmit, onRedirect, errorText }) {
  const [data, setData] = React.useState({});


  const validator = useFormValidation();

  const handleChange = (e) => {
    validator.handleChange(e);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = ((evt) => {
    evt.preventDefault();
    if (validator.isValid) {
      onSubmit(data);
    }
  })

  const handleClosePopup = (() => {
    validator.resetForm();
    onClose();
  })


  return (
    <PopupWithForm
      title='Вход'
      name='login'
      submitText='Войти'
      redirectText='Зарегистрироваться'
      onRedirect={onRedirect}
      isOpen={isOpen}
      onClose={handleClosePopup}
      onSubmit={handleSubmit}
      errorText={errorText}
      isValid={validator.isValid}>
      <p className="popup__input-title">Email</p>
      <input
        name="email"
        className="popup__input"
        type="email"
        required
        autoComplete="off"
        placeholder="введите Email"
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
        placeholder="введите пароль"
        onChange={handleChange}
      />
      <span className="popup__error ">{validator.errors.password}</span>
    </PopupWithForm>
  );
}
export default Login;
