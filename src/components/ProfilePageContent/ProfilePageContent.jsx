import profilePageContentStyles from './ProfilePageContent.module.css';
import { NavLink } from 'react-router';
import ProfilePageContentForm from './ProfilePageContentForm/ProfilePageContentForm';
import { useDispatch } from 'react-redux';
import { logoutUserProfileAction } from '../../services/Auth/AuthActions';
import { PATHS } from '../../utils/constants';
import { useNavigate } from 'react-router';
import { getCookie, setCookie } from '../../utils/functions';

export default function ProfilePageContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    const refreshToken = getCookie('refreshToken');
    dispatch(logoutUserProfileAction({ refreshToken }))
      .unwrap()
      .then((response) => {
        if (response.success) {
          setCookie('accessToken', '');
          setCookie('refreshToken', '');
          navigate(PATHS.LOGIN, { replace: true });
        }
      });
  }

  return (
    <div className={profilePageContentStyles.container}>
      <div className={profilePageContentStyles.leftSide}>
        <ul className={`mb-20 ${profilePageContentStyles.navLinksList}`}>
          <li className={profilePageContentStyles.navLinkItem}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${profilePageContentStyles.navLink} ${
                  isActive ? profilePageContentStyles.active : ''
                }`
              }
            >
              <span className="text text_type_main-medium">Профиль</span>
            </NavLink>
          </li>
          <li className={profilePageContentStyles.navLinkItem}>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `${profilePageContentStyles.navLink} ${
                  isActive ? profilePageContentStyles.active : ''
                }`
              }
            >
              <span className="text text_type_main-medium">История заказов</span>
            </NavLink>
          </li>
          <li className={profilePageContentStyles.navLinkItem}>
            <button onClick={handleLogout} className={profilePageContentStyles.logoutButton}>
              <span className="text text_type_main-medium">Выход</span>
            </button>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <ProfilePageContentForm />
      </div>
    </div>
  );
}
