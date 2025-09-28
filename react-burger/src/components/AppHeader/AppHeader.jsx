import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './AppHeader.module.css';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderItem from './HeaderItem/HeaderItem';

function AppHeader(props) {
  return (
    <header className={appHeaderStyles.header + ' ml-10 mr-10 mt-10 pt-4 pb-4'}>
      <div className={appHeaderStyles.headerContainer}>
        <ul className={appHeaderStyles.headerItemsContainer}>
          <li>
            <HeaderItem icon={<BurgerIcon />} text="Конструктор" textType="active" />
          </li>
          <li>
            <HeaderItem icon={<ListIcon type="secondary" />} text="Лента заказов" />
          </li>
        </ul>

        <div className={appHeaderStyles.headerLogo}>
          <Logo />
        </div>

        <div className={appHeaderStyles.headerAccountBtn}>
          <HeaderItem icon={<ProfileIcon type="secondary" />} text="Личный кабинет" />
        </div>
      </div>
    </header>
  );
}

AppHeader.propTypes = {};

export default AppHeader;
