import React, { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router';
import { PATHS } from '../../utils/constants';
import style from './PageForm.module.css';
import { request } from '../../utils/functions';
import PropTypes from 'prop-types';

export default function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    password: '',
    code: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleInputsChange(target) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  const handleClick = async () => {
    await request(' https://norma.education-services.ru/api/password-reset/reset', {
      method: 'POST',
    });
  };

  return (
    <div className={style.form}>
      <h2>Восстановление пароля</h2>
      <Input
        placeholder="Пароль"
        value={formData.password}
        onChange={(e) => handleInputsChange(e.target)}
        name="password"
        type={showPassword ? 'text' : 'password'}
        icon={!showPassword ? 'ShowIcon' : 'HideIcon'}
        onIconClick={() => setShowPassword(!showPassword)}
      />
      <Input
        placeholder="Введите код из письма"
        value={formData.code}
        onChange={(e) => handleInputsChange(e.target)}
        name="code"
        type="text"
      />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass="mb-20"
        onClick={handleClick}
      >
        Сохранить
      </Button>
      <div className={style.footer}>
        <p className="text text_type_main-small">
          Вспомнили пароль?{' '}
          <Link to={PATHS.LOGIN} className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
