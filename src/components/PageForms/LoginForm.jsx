import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './PageForm.module.css';
import { useState } from 'react';
import { Link } from 'react-router';
import { PATHS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserProfileAction } from '../../services/Auth/AuthActions';
import { useNavigate } from 'react-router';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleInputsChange(target) {
    setFormData({ ...formData, [target.name]: target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUserProfileAction(formData))
      .unwrap()
      .then((res) => {
        if (res.success) {
          navigate('/', { replace: true });
        }
      });
  }
  return (
    <div className={style.form}>
      <h2>Вход</h2>
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
        onClick={handleSubmit}
      >
        Войти
      </Button>
      <div className={style.footer}>
        <p className="text text_type_main-small">
          Вы — новый пользователь?{' '}
          <Link to={PATHS.REGISTER} className={style.link}>
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-small">
          Забыли пароль?{' '}
          <Link to={PATHS.FORGOT} className={style.link}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
}
