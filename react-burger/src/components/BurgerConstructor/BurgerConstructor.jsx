import React, { useState, useMemo } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  setSelectedIngredients,
  dragSelectedIngredients,
} from '../../services/SelectedIngredients/SelectedIngredientSlice';
import { createOrder, clearOrder } from '../../services/Order/OrderSlice';
import BurgerConstructorItem from './BurgerConstructorItem/BurgerConstructorItem';

function BurgerConstructor() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { bun, ingredients } = useSelector((state) => state.selectedIngredients);
  const { order, isLoading, error } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (item) => {
      if (item.type !== 'reorder') {
        dispatch(setSelectedIngredients(item));
      }
    },
  });

  const handleMoveIngredient = (fromIndex, toIndex) => {
    dispatch(dragSelectedIngredients({ index: fromIndex, newIndex: toIndex }));
  };

  const handleCreateOrder = async () => {
    if (!bun || ingredients.length === 0) {
      alert('Добавьте булку и ингредиенты для создания заказа');
      return;
    }

    const ingredientsIds = [bun._id, ...ingredients.map((ingredient) => ingredient._id), bun._id];

    try {
      await dispatch(createOrder(ingredientsIds)).unwrap();
      setModalIsOpen(true);
    } catch (error) {
      console.error('Ошибка при создании заказа:', error);
      alert(`Ошибка при создании заказа: ${error}`);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    dispatch(clearOrder());
  };

  const totalPrice = useMemo(() => {
    return bun?.price * 2 + ingredients?.reduce((acc, ingredient) => acc + ingredient?.price, 0);
  }, [bun, ingredients]);

  return (
    <>
      <section
        className={`${burgerConstructorStyle.burgerConstructor} pt-25 pl-4 pr-4 pb-10`}
        ref={dropRef}
      >
        <ul className={`${burgerConstructorStyle.burgerConstructorList}`}>
          <ConstructorElement
            type={bun?.type}
            isLocked={true}
            text={bun?.name + ' (верх)'}
            price={bun?.price}
            thumbnail={bun?.image}
          />
          <div className={`${burgerConstructorStyle.burgerConstructorListContainer}`}>
            {ingredients?.map((ingredient, index) => (
              <BurgerConstructorItem
                key={ingredient?.uniqueId}
                ingredient={ingredient}
                index={index}
                onMove={handleMoveIngredient}
              />
            ))}
          </div>
          <ConstructorElement
            type={bun?.type}
            isLocked={true}
            text={bun?.name + ' (низ)'}
            price={bun?.price}
            thumbnail={bun?.image}
          />
        </ul>
        <div className={burgerConstructorStyle.totalPriceContainer}>
          <div className={burgerConstructorStyle.totalPrice}>
            <span className="text text_type_main-large">{totalPrice}</span>
            <CurrencyIcon type="primary" className={burgerConstructorStyle.currencyIcon} />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleCreateOrder}
            disabled={isLoading || !bun || ingredients.length === 0}
          >
            {isLoading ? 'Создание заказа...' : 'Оформить заказ'}
          </Button>
        </div>
      </section>

      {modalIsOpen && (
        <Modal onClose={handleCloseModal} modalClassName="pt-30 pb-30">
          <OrderDetails order={order} error={error} />
        </Modal>
      )}
    </>
  );
}

// PropTypes не нужны, так как компонент не принимает пропсы

export default BurgerConstructor;
