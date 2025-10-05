import React, { useState } from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsItemStyle from './BurgerIngredientsItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../Modal/Modal';
import ModalIngredientDetails from '../../Modal/ModalIngredientDetails/ModalIngredientDetails';

export default function BurgerIngredientsItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <li className={`${burgerIngredientsItemStyle.card}`} onClick={() => setIsModalOpen(true)}>
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

      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <ModalIngredientDetails item={item} />
      </Modal>
    </>
  );
}

BurgerIngredientsItem.propTypes = {
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
};
