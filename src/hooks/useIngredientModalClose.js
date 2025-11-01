import { useNavigate, useLocation } from 'react-router';
import { useCallback } from 'react';

function useIngredientModalClose() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    const bg = location.state?.backgroundLocation;
    if (bg) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }, [navigate, location]);
}

export default useIngredientModalClose;
