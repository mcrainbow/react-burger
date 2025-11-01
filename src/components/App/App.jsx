import { Routes, Route } from 'react-router';
import AppLayout from '../../layouts/AppLayout';
import Homepage from '../../pages/Homepage';
import { PATHS } from '../../utils/constants';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import ProfilePage from '../../pages/ProfilePage';
import ProtectedRoutesUser from '../ProtecteedRoutes/ProtectedRoutesUser';
import ProtectedRoutesGuests from '../ProtecteedRoutes/ProtectedRoutesGuest';
import IngredientsInfoPage from '../../pages/IngredientsInfoPage';
import { useLocation } from 'react-router';
import IngredientModal from '../Modal/IngredientModal';

export default function App() {
  const location = useLocation();
  const background = location.state?.backgroundLocation;

  return (
    <>
      <Routes location={background || location}>
        <Route element={<AppLayout />}>
          <Route path={PATHS.HOME} element={<Homepage />} index={true} />

          <Route
            path={PATHS.LOGIN}
            element={
              <ProtectedRoutesUser>
                <LoginPage />
              </ProtectedRoutesUser>
            }
          />
          <Route
            path={PATHS.REGISTER}
            element={
              <ProtectedRoutesUser>
                <RegisterPage />
              </ProtectedRoutesUser>
            }
          />
          <Route
            path={PATHS.FORGOT}
            element={
              <ProtectedRoutesUser>
                <ForgotPasswordPage />
              </ProtectedRoutesUser>
            }
          />
          <Route
            path={PATHS.RESET}
            element={
              <ProtectedRoutesUser>
                <ResetPasswordPage />
              </ProtectedRoutesUser>
            }
          />
          <Route path={PATHS.INGREDIENTS_INFO} element={<IngredientsInfoPage />} />
          <Route
            path={PATHS.PROFILE}
            element={
              <ProtectedRoutesGuests>
                <ProfilePage />
              </ProtectedRoutesGuests>
            }
          />
          <Route
            path="/profile/orders"
            element={
              <ProtectedRoutesGuests>
                <div>Orders</div>
              </ProtectedRoutesGuests>
            }
          />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientModal />} />
        </Routes>
      )}
    </>
  );
}
