import React from 'react';
import { Navigate } from 'react-router';
import { isUserAuthenticated } from '../../utils/functions';
import { PATHS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

export default function ProtectedRoutesGuests({ children }) {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isUserAuthenticated(user)) {
    return <Navigate to={PATHS.LOGIN} replace state={{ to: location.pathname }} />;
  }

  return <>{children}</>;
}

ProtectedRoutesGuests.propTypes = {
  children: PropTypes.node.isRequired,
};
