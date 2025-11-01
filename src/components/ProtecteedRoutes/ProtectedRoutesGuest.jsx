import React from 'react';
import { Navigate } from 'react-router';
import { isUserAuthenticated } from '../../utils/functions';
import { PATHS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function ProtectedRoutesGuests({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!isUserAuthenticated(user)) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return <>{children}</>;
}

ProtectedRoutesGuests.propTypes = {
  children: PropTypes.node.isRequired,
};
