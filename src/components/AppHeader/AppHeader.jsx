import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './AppHeader.module.css';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderItem from './HeaderItem/HeaderItem';
import { Link, NavLink, useLocation } from 'react-router';
import { PATHS } from '../../utils/constants';

function AppHeader() {
  const location = useLocation();
  return (
    <header className={appHeaderStyles.header + ' ml-10 mr-10 mt-10 pt-4 pb-4'}>
      <div className={appHeaderStyles.headerContainer}>
        <ul className={appHeaderStyles.headerItemsContainer}>
          <li>
            <NavLink to={PATHS.HOME}>
              {({ isActive }) => (
                <HeaderItem
                  icon={<BurgerIcon type={isActive ? 'primary' : 'secondary'} />}
                  text="Конструктор"
                  textType={isActive ? 'text_color_primary' : 'text_color_inactive'}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={`${PATHS.PROFILE}/orders`}>
              {({ isActive }) => (
                <HeaderItem
                  icon={<ListIcon type={isActive ? 'primary' : 'secondary'} />}
                  text="Лента заказов"
                  textType={isActive ? 'text_color_primary' : 'text_color_inactive'}
                />
              )}
            </NavLink>
          </li>
        </ul>

        <div className={appHeaderStyles.headerLogo}>
          <Link to={PATHS.HOME}>
            <Logo />
          </Link>
        </div>

        <NavLink to={PATHS.PROFILE} className={appHeaderStyles.headerAccountBtn} end>
          {({ isActive }) => (
            <HeaderItem
              icon={<ProfileIcon type={isActive ? 'primary' : 'secondary'} />}
              text="Личный кабинет"
              textType={isActive ? 'text_color_primary' : 'text_color_inactive'}
            />
          )}
        </NavLink>
      </div>
    </header>
  );
}

export default AppHeader;
