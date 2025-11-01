import { isTokenExpired, tokenExists } from '../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAction, updateTokenAction } from '../services/Auth/AuthActions';
import { getCookie } from '../utils/functions';
import { useEffect } from 'react';

export default function useUserExist() {
  const dispatch = useDispatch();

  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');

  useEffect(() => {
    if (tokenExists(accessToken)) {
      if (!isTokenExpired(accessToken)) {
        dispatch(
          getUserProfileAction({
            accessToken: accessToken,
          })
        );
      } else {
        dispatch(updateTokenAction(refreshToken));
      }
    } else {
      if (tokenExists(refreshToken)) {
        dispatch(updateTokenAction(refreshToken));
      }
    }
  }, [accessToken, dispatch, refreshToken]);
}
