import React from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import BurgerConstuctorTabMenu from './BurgerConstuctorTabMenu/BurgerConstuctorTabMenu';
import BurgerConstructorItem from './BurgerConstructorItem/BurgerConstructorItem';
import BurgerConstructorMenuSection from './BurgerConstructorMenuSection/BurgerConstructorMenuSection';

function BurgerConstructor({ data }) {
  const buns = data.filter((item) => item.type === 'bun');
  const main = data.filter((item) => item.type === 'main');
  const sauce = data.filter((item) => item.type === 'sauce');

  return (
    <section className={`${burgerConstructorStyles.BurgerConstructor} pt-10`}>
      <div>
        <h2 className={`${burgerConstructorStyles.title} text_type_main-large mb-5`}>
          Соберите бургер
        </h2>
      </div>
      <div className="mb-10">
        <BurgerConstuctorTabMenu />
      </div>
      <div className={burgerConstructorStyles.list}>
        <div>
          <h3 className="text text_type_main-medium">Булки</h3>
          <BurgerConstructorMenuSection>
            {buns.map((item) => (
              <BurgerConstructorItem key={item.id} item={item} />
            ))}
          </BurgerConstructorMenuSection>
        </div>
        <div>
          <h3 className="text text_type_main-medium">Соусы</h3>
          <BurgerConstructorMenuSection>
            {sauce.map((item) => (
              <BurgerConstructorItem key={item.id} item={item} />
            ))}
          </BurgerConstructorMenuSection>
        </div>
        <div>
          <h3 className="text text_type_main-medium">Начинки</h3>
          <BurgerConstructorMenuSection>
            {main.map((item) => (
              <BurgerConstructorItem key={item.id} item={item} />
            ))}
          </BurgerConstructorMenuSection>
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
