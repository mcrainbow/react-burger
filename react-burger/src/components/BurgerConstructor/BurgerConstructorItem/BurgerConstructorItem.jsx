import React from 'react';
import burgerConstructorItemStyles from './BurgerConstructorItem.module.css';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructorItem({ item, upperBun }) {
  const isBun = item.type === 'bun';
  const isUpperBun = upperBun && isBun;
  return (
    <li className={`${burgerConstructorItemStyles.container}`}>
      {!isBun && <DragIcon type="primary" />}
      <div className={`${burgerConstructorItemStyles.card} pl-6 pr-8 pt-4 pb-4 ${isBun && 'ml-8'}`}>
        <div className={burgerConstructorItemStyles.image}>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          {/* Убрать надписи у мвсех лементов и оставить толька на блках */}
          <p className="text text_type_main-default">{`${item.name}${
            isBun ? (isUpperBun ? ' (вверх)' : ' (низ)') : ''
          }`}</p>
        </div>
        <div className={burgerConstructorItemStyles.lastContainer}>
          <div className={burgerConstructorItemStyles.price}>
            <span className="text text_type_main-default">{item.price}</span>
            <CurrencyIcon className={burgerConstructorItemStyles.currencyIcon} type="primary" />
          </div>
          <button className={burgerConstructorItemStyles.button}>
            {isBun ? <LockIcon type="primary" /> : <DeleteIcon type="primary" />}
          </button>
        </div>
      </div>
    </li>
  );
}

BurgerConstructorItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
  upperBun: PropTypes.bool,
};

export default BurgerConstructorItem;
