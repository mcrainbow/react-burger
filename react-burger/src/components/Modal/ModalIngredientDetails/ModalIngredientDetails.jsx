import PropTypes from 'prop-types';
import modalIngredientDetailsStyles from './ModalIngredientDetails.module.css';

export default function ModalIngredientDetails({ item }) {
  return (
    <div>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={modalIngredientDetailsStyles.container}>
        <div className="mb-4">
          <img src={item.image_large} alt={item} />
        </div>
        <h3 className="pb-8 text text_type_main-medium">{item.name}</h3>
        <div className={modalIngredientDetailsStyles.details}>
          <div className={modalIngredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Калории,ккал</span>
            <span className="text text_type_digits-default">{item.calories}</span>
          </div>
          <div className={modalIngredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Белки, г</span>
            <span className="text text_type_digits-default">{item.proteins}</span>
          </div>
          <div className={modalIngredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Жиры, г</span>
            <span className="text text_type_digits-default">{item.fat}</span>
          </div>
          <div className={modalIngredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Углеводы, г</span>
            <span className="text text_type_digits-default">{item.carbohydrates}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalIngredientDetails.propTypes = {
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
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
  }).isRequired,
};
