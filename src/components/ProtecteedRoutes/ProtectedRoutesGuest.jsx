import React from 'react';
import { Navigate } from 'react-router';
import { isUserAuthenticated, tokenExists, getCookie } from '../../utils/functions';
import { PATHS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

export default function ProtectedRoutesGuests({ children }) {
  const { user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();

  // Проверяем наличие токенов в cookies
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const hasTokens = tokenExists(accessToken) || tokenExists(refreshToken);

  // Если идет загрузка, ждем завершения
  if (isLoading) {
    return null;
  }

  // Если есть токены, но данные пользователя еще не загружены, ждем
  // (это означает, что загрузка еще не началась или не завершилась)
  if (hasTokens && !isUserAuthenticated(user)) {
    return null;
  }

  // Только после завершения загрузки проверяем аутентификацию
  if (!isUserAuthenticated(user)) {
    return <Navigate to={PATHS.LOGIN} replace state={{ to: location.pathname }} />;
  }

  return <>{children}</>;
}

ProtectedRoutesGuests.propTypes = {
  children: PropTypes.node.isRequired,
};
