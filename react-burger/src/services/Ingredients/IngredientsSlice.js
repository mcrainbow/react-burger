import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Ошибка при загрузке ингредиентов');
      }

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.ingredients = [];
      });
  },
});

export default ingredientsSlice.reducer;
