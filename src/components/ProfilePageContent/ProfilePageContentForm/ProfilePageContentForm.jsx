import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import profilePageContentFormStyles from './ProfilePageContentForm.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { updateUserProfileAction } from '../../../services/Auth/AuthActions';
import { getCookie } from '../../../utils/functions';
import { useMemo } from 'react';

export default function ProfilePageContentForm() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    password: 'asdqwe234567890',
  });

  const isFormChanged = useMemo(() => {
    return formData.name !== user.name || formData.email !== user.email;
  }, [formData.name, formData.email, user.name, user.email]);

  function handleInputsChange(target) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function handleCancel() {
    setFormData({
      name: user.name,
      email: user.email,
      password: 'asdqwe234567890',
    });
  }

  function handleSave(e) {
    e.preventDefault();
    dispatch(
      updateUserProfileAction({
        accessToken: getCookie('accessToken'),
        name: formData.name,
        email: formData.email,
      })
    );
  }
  return (
    <div>
      <form className={profilePageContentFormStyles.form}>
        <Input
          type="text"
          placeholder="Имя"
          icon="EditIcon"
          value={formData.name}
          onChange={(e) => handleInputsChange(e.target)}
          name="name"
        />
        <Input
          type="email"
          placeholder="Email"
          icon="EditIcon"
          value={formData.email}
          onChange={(e) => handleInputsChange(e.target)}
          name="email"
        />
        <Input
          type="password"
          placeholder="Пароль"
          icon="EditIcon"
          value={formData.password}
          onChange={(e) => handleInputsChange(e.target)}
          name="password"
          disabled={true}
        />
        <div className={profilePageContentFormStyles.buttonsContainer}>
          <Button
            type="secondary"
            size="medium"
            extraClass={profilePageContentFormStyles.cancelButton}
            onClick={handleCancel}
            htmlType="button"
            disabled={!isFormChanged}
          >
            Отменить
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            onClick={(e) => handleSave(e)}
            disabled={!isFormChanged}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
}
