import { configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './Ingredients/IngredientsSlice';
import selectedIngredientsSlice from './SelectedIngredients/SelectedIngredientSlice';
import currentIngredientSlice from './CurrentIngredient/CurrentIngredientSlice';
import orderSlice from './Order/OrderSlice';
import authSlice from './Auth/AuthSlice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice,
    selectedIngredients: selectedIngredientsSlice,
    currentIngredient: currentIngredientSlice,
    order: orderSlice,
    auth: authSlice,
  },
});
