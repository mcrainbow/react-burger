import React, { useEffect } from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import './reset.css';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import MainContent from './components/MainContent/MainContent';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from './services/Ingredients/IngredientsSlice';

function App() {
  const { isLoading } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className="App">
      <AppHeader />
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
    </div>
  );
}

export default App;
