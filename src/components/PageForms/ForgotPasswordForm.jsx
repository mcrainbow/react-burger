import { useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router';
import { PATHS } from '../../utils/constants';
import style from './PageForm.module.css';
import { request } from '../../utils/functions';

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const navigate = useNavigate();

  function handleInputsChange(target) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  const handleClick = async () => {
    const data = await request('https://norma.education-services.ru/api/password-reset', {
      method: 'POST',
    });

    if (!data) return;

    navigate(PATHS.RESET, { state: { email: formData.email } });
  };
  return (
    <div className={style.form}>
      <h2>Восстановление пароля</h2>

      <Input
        placeholder="E-mail"
        value={formData.email}
        onChange={(e) => handleInputsChange(e.target)}
        name="email"
        type="email"
      />

      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass="mb-20"
        onClick={handleClick}
      >
        Восстановить
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
