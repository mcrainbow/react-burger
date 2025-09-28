import React from 'react';
import burgerConstructorMenuSectionStyle from './BurgerConstructorMenuSection.module.css';

export default function BurgerConstructorMenuSection({ children }) {
  return (
    <ul className={`${burgerConstructorMenuSectionStyle.container} pl-4 pr-4 pt-6 pb-10`}>
      {children}
    </ul>
  );
}
