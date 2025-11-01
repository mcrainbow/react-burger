import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserProfileAction,
  createUserProfileAction,
  getUserProfileAction,
  updateTokenAction,
  logoutUserProfileAction,
  updateUserProfileAction,
} from './AuthActions';

export const initialState = {
  user: {
    name: '',
    email: '',
  },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  success: '',
  error: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUserProfileAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserProfileAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
        state.success = action.payload.success;
        state.error = null;
      })
      .addCase(loginUserProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = initialState.user;
        state.tokens = initialState.tokens;
        state.success = '';
      });
    builder
      .addCase(createUserProfileAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUserProfileAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
        state.error = null;
      })
      .addCase(createUserProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getUserProfileAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserProfileAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
      })
      .addCase(getUserProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(updateTokenAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTokenAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
      })
      .addCase(updateTokenAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(logoutUserProfileAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserProfileAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.tokens = initialState.tokens;
        state.success = '';
        state.error = null;
      })
      .addCase(logoutUserProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = {};
      });
    builder
      .addCase(updateUserProfileAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfileAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUserProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
