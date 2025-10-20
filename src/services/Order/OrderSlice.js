import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import { request } from '../../utils/functions';

const initialState = {
  order: {},
  isLoading: false,
  error: null,
};

export const createOrder = createAsyncThunk('order/createOrder', async (ingredients) => {
  const order = await request(`${BASE_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });

  return order;
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    clearOrder: (state) => {
      state.order = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.order = {};
      });
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
