import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import './reset.css';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import MainContent from './components/MainContent/MainContent';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import data from './data/data';

// data is now imported from ./data/data

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainContent>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </MainContent>
    </div>
  );
}

export default App;
