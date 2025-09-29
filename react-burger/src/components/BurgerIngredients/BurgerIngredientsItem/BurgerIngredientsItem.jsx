import React from 'react';
import burgerIngredientsItemStyle from './BurgerIngredientsItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredientsItem({ item }) {
  return (
    <li className={`${burgerIngredientsItemStyle.card}`}>
      <div className="pl-4 pr-4">
        <img src={item.image} alt={item.name} />
      </div>
      <div className={burgerIngredientsItemStyle.price}>
        <p className="text text_type_main-medium">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={burgerIngredientsItemStyle.name}>
        <p className="text text_type_main-default">{item.name}</p>
      </div>
    </li>
  );
}
