import AppHeader from '../components/AppHeader/AppHeader';
import { Outlet } from 'react-router';
import '../App.css';
import useUserExist from '../hooks/useUserExist';
import { useIngredients } from '../hooks/useIngredients';

export default function AppLayout() {
  useUserExist();
  useIngredients();

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
