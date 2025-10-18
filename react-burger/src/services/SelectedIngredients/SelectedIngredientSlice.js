import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bun: null,
  ingredients: [],
  totalPrice: 0,
  totalCount: 0,
};

const selectedIngredientSlice = createSlice({
  name: 'selectedIngredients',
  initialState,
  reducers: {
    setSelectedIngredients: (state, action) => {
      const newIngredient = action.payload;

      if (newIngredient.type === 'bun') {
        state.bun = newIngredient;
        return;
      }

      state.ingredients.push({ ...newIngredient, uniqueId: uuidv4() });
    },
    removeSelectedIngredients: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.uniqueId !== action.payload
      );
    },
    dragSelectedIngredients: (state, action) => {
      const newIngredients = [...state.ingredients];
      const [draggedIngredient] = newIngredients.splice(action.payload.index, 1);
      newIngredients.splice(action.payload.newIndex, 0, draggedIngredient);
      state.ingredients = newIngredients;
    },
  },
});

export const { setSelectedIngredients, removeSelectedIngredients, dragSelectedIngredients } =
  selectedIngredientSlice.actions;
export default selectedIngredientSlice.reducer;
