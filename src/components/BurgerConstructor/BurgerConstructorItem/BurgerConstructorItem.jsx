import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { removeSelectedIngredients } from '../../../services/SelectedIngredients/SelectedIngredientSlice';
import { IngredientType } from '../../../utils/types';
import burgerConstructorItemStyles from './BurgerConstructorItem.module.css';

export default function BurgerConstructorItem({ ingredient, index, onMove }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: {
      ...ingredient,
      index,
      type: 'reorder',
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (item, monitor) => {
      if (!monitor.didDrop()) {
        if (item.type === 'reorder' && item.index !== index) {
          onMove(item.index, index);
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const dispatch = useDispatch();

  const handleRemove = (uniqueId) => {
    dispatch(removeSelectedIngredients(uniqueId));
  };

  return (
    <div
      ref={dragDropRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver ? '#1C1C21' : 'transparent',
        transition: 'background-color 0.2s ease',
      }}
      className={burgerConstructorItemStyles.burgerConstructorItem}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        handleClose={() => handleRemove(ingredient?.uniqueId)}
        type={ingredient?.type}
        isLocked={false}
        text={ingredient?.name}
        price={ingredient?.price}
        thumbnail={ingredient?.image}
      />
    </div>
  );
}

BurgerConstructorItem.propTypes = {
  ingredient: IngredientType.isRequired,
  index: PropTypes.number.isRequired,
  onMove: PropTypes.func.isRequired,
};
