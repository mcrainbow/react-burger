import burgerIngredientsItemStyles from './BurgerIngredientsItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../../utils/types';

function BurgerIngredientsItem({ item, onClick }) {
  return (
    <div className={burgerIngredientsItemStyles.card} onClick={onClick}>
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
};

export default BurgerIngredientsItem;
