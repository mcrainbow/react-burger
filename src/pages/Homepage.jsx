import MainContent from '../components/MainContent/MainContent';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';
import { useSelector } from 'react-redux';

export default function Homepage() {
  const { isLoading } = useSelector((state) => state.ingredients);
  return (
    <MainContent>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
      )}
    </MainContent>
  );
}
