import React, { useState, useMemo, useCallback } from 'react';
import burgerConstructorStyle from './BurgerConstructor.module.css';
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
  addIngredient,
  dragSelectedIngredients,
  resetSelectedIngredients,
} from '../../services/SelectedIngredients/SelectedIngredientSlice';
import { createOrder } from '../../services/Order/OrderSlice';
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
        dispatch(addIngredient(item));
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
    dispatch(resetSelectedIngredients());
  };

  const totalPrice = useMemo(() => {
    const bunPrice = bun?.price || 0;
    const ingredientsPrice =
      ingredients?.reduce((acc, ingredient) => acc + (ingredient?.price || 0), 0) || 0;
    return bunPrice * 2 + ingredientsPrice;
  }, [bun, ingredients]);

  const getBunElement = useCallback(
    (position, type) => {
      if (!bun) {
        return null;
      }

      return (
        <ConstructorElement
          type={type}
          isLocked={true}
          text={bun.name + ` (${position})`}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
      );
    },
    [bun]
  );

  const topBun = useMemo(() => getBunElement('верх', 'top'), [getBunElement]);
  const bottomBun = useMemo(() => getBunElement('низ', 'bottom'), [getBunElement]);

  return (
    <>
      <section
        className={`${burgerConstructorStyle.burgerConstructor} pt-25 pl-4 pr-4 pb-10`}
        ref={dropRef}
      >
        <ul className={`${burgerConstructorStyle.burgerConstructorList}`}>
          {bun ? topBun : <div>Выберите булку</div>}
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

          {bottomBun}
        </ul>
        <div className={burgerConstructorStyle.totalPriceContainer}>
          <div className={burgerConstructorStyle.totalPrice}>
            <span className="text text_type_main-large">{totalPrice || 0}</span>
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

export default BurgerConstructor;
