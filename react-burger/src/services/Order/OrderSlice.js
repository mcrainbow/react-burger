import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  order: {},
  isLoading: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (ingredients, { rejectWithValue }) => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredients,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Ошибка при создании заказа');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
