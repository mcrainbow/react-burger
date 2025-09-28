import React from 'react';
import burgerIngredientsItemStyles from './BurgerIngredientsItem.module.css';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsItem({ item, upperBun }) {
  const isBun = item.type === 'bun';
  const isUpperBun = upperBun && isBun;
  return (
    <li className={`${burgerIngredientsItemStyles.container}`}>
      {!isBun && <DragIcon type="primary" />}
      <div className={`${burgerIngredientsItemStyles.card} pl-6 pr-8 pt-4 pb-4 ${isBun && 'ml-8'}`}>
        <div className={burgerIngredientsItemStyles.image}>
          <img src={item.image} alt="" />
        </div>
        <div>
          {/* Убрать надписи у мвсех лементов и оставить толька на блках */}
          <p className="text text_type_main-default">{`${item.name}${
            isBun ? (isUpperBun ? ' (вверх)' : ' (низ)') : ''
          }`}</p>
        </div>
        <div className={burgerIngredientsItemStyles.lastContainer}>
          <div className={burgerIngredientsItemStyles.price}>
            <span className="text text_type_main-default">{item.price}</span>
            <CurrencyIcon className={burgerIngredientsItemStyles.currencyIcon} type="primary" />
          </div>
          <button className={burgerIngredientsItemStyles.button}>
            {isBun ? <LockIcon type="primary" /> : <DeleteIcon type="primary" />}
          </button>
        </div>
      </div>
    </li>
  );
}

BurgerIngredientsItem.propTypes = {
  isBun: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  upperBun: PropTypes.bool,
};

export default BurgerIngredientsItem;
