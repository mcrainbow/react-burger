import { useSelector } from 'react-redux';
import { isUserAuthenticated } from '../../utils/functions';
import { PATHS } from '../../utils/constants';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

export default function ProtectedRoutesUser({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (isUserAuthenticated(user)) {
    return <Navigate to={PATHS.PROFILE} replace />;
  }
  return <>{children}</>;
}

ProtectedRoutesUser.propTypes = {
  children: PropTypes.node.isRequired,
};
