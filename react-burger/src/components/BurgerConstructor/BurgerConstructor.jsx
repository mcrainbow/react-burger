import React from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import BurgerConstructorItem from './BurgerConstructorItem/BurgerConstructorItem';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ data }) {
  return (
    <section className={`${burgerConstructorStyle.burgerConstructor} pt-25 pl-4 pr-4 pb-10`}>
      <ul className={`${burgerConstructorStyle.burgerConstructorList}`}>
        <BurgerConstructorItem item={data[0]} upperBun={true} />
        <BurgerConstructorItem
          item={data.find((item) => item.name === 'Соус традиционный галактический')}
        />
        <BurgerConstructorItem
          item={data.find((item) => item.name === 'Мясо бессмертных моллюсков Protostomia')}
        />
        <BurgerConstructorItem
          item={data.find((item) => item.name === 'Плоды Фалленианского дерева')}
        />
        <BurgerConstructorItem
          item={data.find((item) => item.name === 'Плоды Фалленианского дерева')}
        />
        <BurgerConstructorItem
          item={data.find((item) => item.name === 'Соус традиционный галактический')}
        />
        <BurgerConstructorItem item={data[0]} upperBun={false} />
      </ul>
      <div className={burgerConstructorStyle.totalPriceContainer}>
        <div className={burgerConstructorStyle.totalPrice}>
          <span className="text text_type_main-large">610</span>
          <CurrencyIcon type="primary" className={burgerConstructorStyle.currencyIcon} />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
