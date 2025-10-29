import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsItemStyles from './BurgerIngredientsItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { IngredientType } from '../../../utils/types';
import { useSelector } from 'react-redux';
import { selectIngredientCounts } from '../../../services/SelectedIngredients/SelectedIngredientSlice';

function BurgerIngredientsItem({ item, onClick }) {
  const ingredientCounts = useSelector(selectIngredientCounts);
  const count = ingredientCounts[item._id] || 0;
  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      className={burgerIngredientsItemStyles.card}
      onClick={onClick}
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {count > 0 && (
        <div className={burgerIngredientsItemStyles.counter}>
          <span className="text text_type_main-default">{count}</span>
        </div>
      )}
      <div className={burgerIngredientsItemStyles.image}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={burgerIngredientsItemStyles.price}>
        <span className="text text_type_main-default">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={burgerIngredientsItemStyles.name}>
        <p className="text text_type_main-default">{item.name}</p>
      </div>
    </div>
  );
}

BurgerIngredientsItem.propTypes = {
  item: IngredientType.isRequired,
  onClick: PropTypes.func,
};

export default BurgerIngredientsItem;
