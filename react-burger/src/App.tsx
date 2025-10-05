import React, { useEffect, useState } from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import './reset.css';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import MainContent from './components/MainContent/MainContent';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

        if (!response.ok) {
          throw new Error('Ошибка: ' + response.status);
        }

        const jsonData = await response.json();

        console.log(jsonData.data);

        setData(jsonData.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <MainContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        )}
      </MainContent>
    </div>
  );
}

export default App;
