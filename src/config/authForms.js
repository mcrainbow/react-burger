// src/config/authForms.js
import { PATHS } from '../utils/constants';

export const authFormConfigs = {
  login: {
    title: 'Вход',
    submitButtonText: 'Войти',
    inputs: [
      {
        type: 'email',
        placeholder: 'E-mail',
        name: 'email',
      },
      {
        type: 'password',
        placeholder: 'Пароль',
        name: 'password',
      },
    ],
    bottomLinks: [
      {
        text: 'Вы — новый пользователь?',
        linkText: 'Зарегистрироваться',
        to: PATHS.REGISTER,
      },
      {
        text: 'Забыли пароль?',
        linkText: 'Восстановить пароль',
        to: PATHS.FORGOT,
      },
    ],
  },

  register: {
    title: 'Регистрация',
    submitButtonText: 'Зарегистрироваться',
    inputs: [
      {
        type: 'text',
        placeholder: 'Имя',
        name: 'name',
      },
      {
        type: 'email',
        placeholder: 'E-mail',
        name: 'email',
      },
      {
        type: 'password',
        placeholder: 'Пароль',
        name: 'password',
      },
    ],
    bottomLinks: [
      {
        text: 'Уже зарегистрированы?',
        linkText: 'Войти',
        to: PATHS.LOGIN,
      },
    ],
  },

  forgotPassword: {
    title: 'Восстановление пароля',
    submitButtonText: 'Восстановить',
    inputs: [
      {
        type: 'email',
        placeholder: 'Укажите e-mail',
        name: 'email',
      },
    ],
    bottomLinks: [
      {
        text: 'Вспомнили пароль?',
        linkText: 'Войти',
        to: PATHS.LOGIN,
      },
    ],
  },

  resetPassword: {
    title: 'Восстановление пароля',
    submitButtonText: 'Сохранить',
    inputs: [
      {
        type: 'password',
        placeholder: 'Введите новый пароль',
        name: 'password',
      },
      {
        type: 'text',
        placeholder: 'Введите код из письма',
        name: 'code',
      },
    ],
    bottomLinks: [
      {
        text: 'Вспомнили пароль?',
        linkText: 'Войти',
        to: PATHS.LOGIN,
      },
    ],
  },
};
