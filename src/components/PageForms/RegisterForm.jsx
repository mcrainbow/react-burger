import React, { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router';
import { PATHS } from '../../utils/constants';
import style from './PageForm.module.css';
import { request } from '../../utils/functions';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleInputsChange(target) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleClick() {
    const data = await request('https://norma.education-services.ru/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      }),
    });
    if (!data) return;
    console.log(data);
  }

  return (
    <div className={style.form}>
      <h2>Регистрация</h2>
      <Input
        placeholder="Имя"
        value={formData.name}
        onChange={(e) => handleInputsChange(e.target)}
        name="name"
        type="text"
      />
      <Input
        placeholder="E-mail"
        value={formData.email}
        onChange={(e) => handleInputsChange(e.target)}
        name="email"
        type="email"
      />
      <Input
        placeholder="Пароль"
        value={formData.password}
        onChange={(e) => handleInputsChange(e.target)}
        name="password"
        type={showPassword ? 'text' : 'password'}
        icon={!showPassword ? 'ShowIcon' : 'HideIcon'}
        onIconClick={() => setShowPassword(!showPassword)}
      />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass="mb-20"
        onClick={handleClick}
      >
        Зарегистрироваться
      </Button>
      <div className={style.footer}>
        <p className="text text_type_main-small">
          Уже зарегистрированы?{' '}
          <Link to={PATHS.LOGIN} className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
