import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsTabMenuStyles from './BurgerIngredientsTabMenu.module.css';

export default function BurgerIngredientsTabMenu({ current }) {
  return (
    <div className={burgerIngredientsTabMenuStyles.container}>
      <Tab value="one" active={current === 'one'}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'}>
        Начинки
      </Tab>
    </div>
  );
}

BurgerIngredientsTabMenu.propTypes = {
  current: PropTypes.oneOf(['one', 'two', 'three']).isRequired,
};
