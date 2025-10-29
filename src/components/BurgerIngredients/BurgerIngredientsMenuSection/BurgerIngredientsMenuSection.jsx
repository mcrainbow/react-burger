import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsMenuSectionStyle from './BurgerIngredientsMenuSection.module.css';

export default function BurgerIngredientsMenuSection({ children }) {
  return (
    <ul className={`${burgerIngredientsMenuSectionStyle.container} pl-4 pr-4 pt-6 pb-10`}>
      {children}
    </ul>
  );
}

BurgerIngredientsMenuSection.propTypes = {
  children: PropTypes.node.isRequired,
};
