import burgerIngredientsItemStyles from './BurgerIngredientsItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

function BurgerIngredientsItem({ item, onClick }) {
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
export default BurgerIngredientsItem;
