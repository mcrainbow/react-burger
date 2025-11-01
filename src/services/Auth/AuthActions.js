import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  createUser,
  logoutUser,
  getUser,
  updateToken,
  updateUser,
  forgotPassword,
  resetPassword,
} from '../../utils/api';

export const loginUserProfileAction = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    return await loginUser(email, password);
  }
);

export const createUserProfileAction = createAsyncThunk(
  'auth/createUser',
  async ({ email, password, name }) => {
    return await createUser({ email, password, name });
  }
);

export const getUserProfileAction = createAsyncThunk(
  'auth/getUserProfile',
  async ({ accessToken }) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: accessToken },
    };
    return await getUser(requestOptions);
  }
);

export const updateTokenAction = createAsyncThunk('auth/updateToken', async ({ refreshToken }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', authorization: refreshToken },
  };
  return await updateToken(requestOptions);
});

export const logoutUserProfileAction = createAsyncThunk(
  'auth/logoutUserProfile',
  async ({ refreshToken }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: refreshToken,
      }),
    };
    return await logoutUser(requestOptions);
  }
);

export const updateUserProfileAction = createAsyncThunk(
  'auth/updateUserProfile',
  async ({ accessToken, name, email }) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', authorization: accessToken },
      body: JSON.stringify({
        name: name || undefined,
        email: email || undefined,
      }),
    };
    return await updateUser(requestOptions);
  }
);

export const forgotPasswordAction = createAsyncThunk('auth/forgotPassword', async ({ email }) => {
  return await forgotPassword({ email });
});

export const resetPasswordAction = createAsyncThunk(
  'auth/resetPassword',
  async ({ password, token }) => {
    return await resetPassword({ password, token });
  }
);
