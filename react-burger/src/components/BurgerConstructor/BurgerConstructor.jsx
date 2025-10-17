import React, { useState } from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import { IngredientType } from '../../utils/types';
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';

function BurgerConstructor({ data }) {
  const [bun, setBun] = useState(data.find((item) => item.name === 'Краторная булка N-200i'));
  const [ingredients, setIngredients] = useState(() => [
    {
      ...data.find((item) => item.name === 'Соус традиционный галактический'),
      id: crypto.randomUUID(),
    },
    {
      ...data.find((item) => item.name === 'Мясо бессмертных моллюсков Protostomia'),
      id: crypto.randomUUID(),
    },
    {
      ...data.find((item) => item.name === 'Плоды Фалленианского дерева'),
      id: crypto.randomUUID(),
    },
    {
      ...data.find((item) => item.name === 'Плоды Фалленианского дерева'),
      id: crypto.randomUUID(),
    },
    {
      ...data.find((item) => item.name === 'Соус традиционный галактический'),
      id: crypto.randomUUID(),
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <section className={`${burgerConstructorStyle.burgerConstructor} pt-25 pl-4 pr-4 pb-10`}>
        <ul className={`${burgerConstructorStyle.burgerConstructorList}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={200}
            thumbnail={bun.image}
          />
          <div className={`${burgerConstructorStyle.burgerConstructorListContainer}`}>
            {ingredients.map((ing) => (
              <ConstructorElement
                type="undefind"
                isLocked={false}
                text={ing.name}
                price={200}
                thumbnail={ing.image}
                key={ing.id} // Я создал уникальный id для всех элементов массива, чтобы при одинаковых ингредиентах key не повторялся. Не уверен что так можно, если что исправлю
              />
            ))}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={200}
            thumbnail={bun.image}
          />
        </ul>
        <div className={burgerConstructorStyle.totalPriceContainer}>
          <div className={burgerConstructorStyle.totalPrice}>
            <span className="text text_type_main-large">610</span>
            <CurrencyIcon type="primary" className={burgerConstructorStyle.currencyIcon} />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => setModalIsOpen(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </section>

      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)} modalClassName="pt-30 pb-30">
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(IngredientType).isRequired,
};

export default BurgerConstructor;
