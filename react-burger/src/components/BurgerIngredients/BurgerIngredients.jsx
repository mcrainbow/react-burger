import React, { useState } from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { IngredientType } from '../../utils/types';
import BurgerIngredientsTabMenu from './BurgerIngredientsTabMenu/BurgerIngredientsTabMenu';
import BurgerIngredientsItem from './BurgerIngredientsItem/BurgerIngredientsItem';
import BurgerIngredientsMenuSection from './BurgerIngredientsMenuSection/BurgerIngredientsMenuSection';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';

function BurgerIngredients({ data }) {
  const [currentTab, setCurrentTab] = useState('one');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIng, setSelectedIng] = useState({});

  const buns = data.filter((item) => item.type === 'bun');
  const main = data.filter((item) => item.type === 'main');
  const sauce = data.filter((item) => item.type === 'sauce');

  const tabContent = {
    one: { title: 'Булки', data: buns },
    two: { title: 'Соусы', data: sauce },
    three: { title: 'Начинки', data: main },
  };

  function handleModalOpen(item) {
    setSelectedIng(item);
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
    setSelectedIng({});
  }

  return (
    <>
      <section className={`${burgerIngredientsStyles.BurgerIngredients} pt-10`}>
        <div>
          <h2 className={`${burgerIngredientsStyles.title} text_type_main-large mb-5`}>
            Соберите бургер
          </h2>
        </div>
        <div className="mb-10">
          <BurgerIngredientsTabMenu current={currentTab} setCurrent={setCurrentTab} />
        </div>
        <div className={burgerIngredientsStyles.list}>
          <div>
            <h3 className="text text_type_main-medium">{tabContent[currentTab].title}</h3>
            <BurgerIngredientsMenuSection>
              {tabContent[currentTab].data.map((item) => (
                <BurgerIngredientsItem
                  key={item._id}
                  item={item}
                  onClick={() => handleModalOpen(item)}
                />
              ))}
            </BurgerIngredientsMenuSection>
          </div>
        </div>
      </section>

      {modalOpen && (
        <Modal onClose={() => handleModalClose()}>
          <IngredientDetails item={selectedIng} />
        </Modal>
      )}
    </>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(IngredientType).isRequired,
};

export default BurgerIngredients;
