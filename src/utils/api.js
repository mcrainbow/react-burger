import { BASE_URL } from './constants';
import { request, setCookie } from './functions';

export const createUser = async ({ email, password, name }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  };
  const response = await request(`${BASE_URL}/auth/register`, requestOptions);
  if (response.success) {
    setCookie('accessToken', response.accessToken);
    setCookie('refreshToken', response.refreshToken);
  }
  return response;
};

export const loginUser = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const response = await request(`${BASE_URL}/auth/login`, requestOptions);
  if (response.success) {
    setCookie('accessToken', response.accessToken);
    setCookie('refreshToken', response.refreshToken);
  }
  return response;
};

export const getUser = async (requestOptions) => {
  const response = await request(`${BASE_URL}/auth/user`, requestOptions);
  return response;
};

export const updateToken = async (requestOptions) => {
  const response = await request(`${BASE_URL}/auth/token`, requestOptions);
  if (response.success) {
    setCookie('accessToken', response.accessToken);
    setCookie('refreshToken', response.refreshToken);
  }
  console.log(response);
  return response;
};

export const logoutUser = async (requestOptions) => {
  const response = await request(`${BASE_URL}/auth/logout`, requestOptions);
  return response;
};

export const updateUser = async (requestOptions) => {
  const response = await request(`${BASE_URL}/auth/user`, requestOptions);
  return response;
};

export const forgotPassword = async ({ email }) => {
  const response = await request(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  });
  return response;
};

export const resetPassword = async ({ password, token }) => {
  const response = await request(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password, token: token }),
  });
  return response;
};
