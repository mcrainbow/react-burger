import ResetPasswordForm from '../components/PageForms/ResetPasswordForm';
import { useLocation } from 'react-router';
import { PATHS } from '../utils/constants';
import { Navigate } from 'react-router';

export default function ResetPasswordPage() {
  const location = useLocation();
  const email = location.state?.email;
  if (!email) {
    return <Navigate to={PATHS.FORGOT} replace />;
  }
  return (
    <section>
      <ResetPasswordForm />
    </section>
  );
}
