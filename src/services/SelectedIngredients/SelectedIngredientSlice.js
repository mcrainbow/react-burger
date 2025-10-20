import { createSlice, createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bun: null,
  ingredients: [],
  totalPrice: 0,
  totalCount: 0,
};

export const addIngredient = createAction('selectedIngredients/addIngredient', (ingredient) => ({
  payload: {
    ...ingredient,
    uniqueId: uuidv4(),
  },
}));

const selectedIngredientSlice = createSlice({
  name: 'selectedIngredients',
  initialState,
  reducers: {
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
    resetSelectedIngredients: (state) => {
      state.bun = null;
      state.ingredients = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addIngredient, (state, action) => {
      const newIngredient = action.payload;

      if (newIngredient.type === 'bun') {
        state.bun = newIngredient;
        return;
      }

      state.ingredients.push(newIngredient);
    });
  },
});

export const {
  setSelectedIngredients,
  removeSelectedIngredients,
  dragSelectedIngredients,
  resetSelectedIngredients,
} = selectedIngredientSlice.actions;

export const selectIngredientCounts = (state) => {
  const counts = {};

  if (state.selectedIngredients.bun) {
    counts[state.selectedIngredients.bun._id] = 1;
  }

  state.selectedIngredients.ingredients.forEach((ingredient) => {
    counts[ingredient._id] = (counts[ingredient._id] || 0) + 1;
  });

  return counts;
};

export default selectedIngredientSlice.reducer;
