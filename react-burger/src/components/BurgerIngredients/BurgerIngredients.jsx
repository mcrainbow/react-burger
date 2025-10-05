import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import BurgerIngredientsTabMenu from './BurgerIngredientsTabMenu/BurgerIngredientsTabMenu';
import BurgerIngredientsItem from './BurgerIngredientsItem/BurgerIngredientsItem';
import BurgerIngredientsMenuSection from './BurgerIngredientsMenuSection/BurgerIngredientsMenuSection';

function BurgerIngredients({ data }) {
  const buns = data.filter((item) => item.type === 'bun');
  const main = data.filter((item) => item.type === 'main');
  const sauce = data.filter((item) => item.type === 'sauce');

  return (
    <section className={`${burgerIngredientsStyles.BurgerIngredients} pt-10`}>
      <div>
        <h2 className={`${burgerIngredientsStyles.title} text_type_main-large mb-5`}>
          Соберите бургер
        </h2>
      </div>
      <div className="mb-10">
        <BurgerIngredientsTabMenu />
      </div>
      <div className={burgerIngredientsStyles.list}>
        <div>
          <h3 className="text text_type_main-medium">Булки</h3>
          <BurgerIngredientsMenuSection>
            {buns.map((item) => (
              <BurgerIngredientsItem key={item._id} item={item} />
            ))}
          </BurgerIngredientsMenuSection>
        </div>
        <div>
          <h3 className="text text_type_main-medium">Соусы</h3>
          <BurgerIngredientsMenuSection>
            {sauce.map((item) => (
              <BurgerIngredientsItem key={item._id} item={item} />
            ))}
          </BurgerIngredientsMenuSection>
        </div>
        <div>
          <h3 className="text text_type_main-medium">Начинки</h3>
          <BurgerIngredientsMenuSection>
            {main.map((item) => (
              <BurgerIngredientsItem key={item._id} item={item} />
            ))}
          </BurgerIngredientsMenuSection>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerIngredients;
