import ingredientDetailsStyles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function IngredientDetails() {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const id = useParams().id;
  const item = ingredients.find((item) => item._id === id);

  if (!item) {
    return <div className="text text_type_main-large">Ингредиент не найден</div>;
  }

  return (
    <div>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={ingredientDetailsStyles.container}>
        <div className="mb-4">
          <img src={item.image_large} alt={item} />
        </div>
        <h3 className="pb-8 text text_type_main-medium">{item.name}</h3>
        <div className={ingredientDetailsStyles.details}>
          <div className={ingredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Калории,ккал</span>
            <span className="text text_type_digits-default">{item.calories}</span>
          </div>
          <div className={ingredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Белки, г</span>
            <span className="text text_type_digits-default">{item.proteins}</span>
          </div>
          <div className={ingredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Жиры, г</span>
            <span className="text text_type_digits-default">{item.fat}</span>
          </div>
          <div className={ingredientDetailsStyles.detailsItem}>
            <span className="text text_type_main-small">Углеводы, г</span>
            <span className="text text_type_digits-default">{item.carbohydrates}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
