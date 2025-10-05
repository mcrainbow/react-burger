import React, { useState } from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import BurgerIngredientsTabMenu from './BurgerIngredientsTabMenu/BurgerIngredientsTabMenu';
import BurgerIngredientsItem from './BurgerIngredientsItem/BurgerIngredientsItem';
import BurgerIngredientsMenuSection from './BurgerIngredientsMenuSection/BurgerIngredientsMenuSection';

function BurgerIngredients({ data }) {
  const [currentTab, setCurrentTab] = useState('one');

  const buns = data.filter((item) => item.type === 'bun');
  const main = data.filter((item) => item.type === 'main');
  const sauce = data.filter((item) => item.type === 'sauce');

  const tabContent = {
    one: { title: 'Булки', data: buns },
    two: { title: 'Соусы', data: sauce },
    three: { title: 'Начинки', data: main },
  };

  return (
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
              <BurgerIngredientsItem key={item._id} item={item} />
            ))}
          </BurgerIngredientsMenuSection>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
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

export default BurgerIngredients;
