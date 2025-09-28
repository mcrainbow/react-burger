import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import BurgerIngredientsItem from './BurgerIngredientsItem/BurgerIngredientsItem';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data }) {
  return (
    <section className={`${burgerIngredientsStyle.burgerIngredients} pt-25 pl-4 pr-4 pb-10`}>
      <ul className={`${burgerIngredientsStyle.burgerIngredientsList}`}>
        <BurgerIngredientsItem item={data[0]} upperBun={true} />
        <BurgerIngredientsItem
          item={data.find((item) => item.name === 'Соус традиционный галактический')}
        />
        <BurgerIngredientsItem
          item={data.find((item) => item.name === 'Мясо бессмертных моллюсков Protostomia')}
        />
        <BurgerIngredientsItem
          item={data.find((item) => item.name === 'Плоды Фалленианского дерева')}
        />
        <BurgerIngredientsItem
          item={data.find((item) => item.name === 'Плоды Фалленианского дерева')}
        />
        <BurgerIngredientsItem
          item={data.find((item) => item.name === 'Соус традиционный галактический')}
        />
        <BurgerIngredientsItem item={data[0]} upperBun={false} />
      </ul>
      <div className={burgerIngredientsStyle.totalPriceContainer}>
        <div className={burgerIngredientsStyle.totalPrice}>
          <span className="text text_type_main-large">610</span>
          <CurrencyIcon type="primary" className={burgerIngredientsStyle.currencyIcon} />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerIngredients;
