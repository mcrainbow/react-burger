import React, { useState } from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import BurgerConstructorItem from './BurgerConstructorItem/BurgerConstructorItem';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import ModalOrderDetails from '../Modal/ModalOrderDetails/ModalOrderDetails';

function BurgerConstructor({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <section className={`${burgerConstructorStyle.burgerConstructor} pt-25 pl-4 pr-4 pb-10`}>
        <ul className={`${burgerConstructorStyle.burgerConstructorList}`}>
          <BurgerConstructorItem item={data[0]} upperBun={true} />
          <div className={`${burgerConstructorStyle.burgerConstructorListContainer}`}>
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
          </div>
          <BurgerConstructorItem item={data[0]} upperBun={false} />
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

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalClassName="pt-30 pb-30"
      >
        <ModalOrderDetails />
      </Modal>
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default BurgerConstructor;
