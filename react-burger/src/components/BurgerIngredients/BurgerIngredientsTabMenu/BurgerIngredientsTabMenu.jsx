import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsTabMenuStyles from './BurgerIngredientsTabMenu.module.css';

export default function BurgerIngredientsTabMenu({ current, setCurrent }) {
  return (
    <div className={burgerIngredientsTabMenuStyles.container}>
      <Tab value="one" active={current === 'one'} onClick={() => setCurrent('one')}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={() => setCurrent('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={() => setCurrent('three')}>
        Начинки
      </Tab>
    </div>
  );
}

BurgerIngredientsTabMenu.propTypes = {
  current: PropTypes.oneOf(['one', 'two', 'three']).isRequired,
  setCurrent: PropTypes.func.isRequired,
};
