import React from 'react';
import burgerConstructorStyle from './BurgerConstructorItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructorItem({ item }) {
  return (
    <li className={`${burgerConstructorStyle.card}`}>
      <div className="pl-4 pr-4">
        <img src={item.image} alt="" />
      </div>
      <div className={burgerConstructorStyle.price}>
        <p className="text text_type_main-medium">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={burgerConstructorStyle.name}>
        <p className="text text_type_main-default">{item.name}</p>
      </div>
    </li>
  );
}
