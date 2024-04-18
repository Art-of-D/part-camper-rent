import { createSlice } from '@reduxjs/toolkit';
import {
  getFavoritesThunk,
  addFavoriteThunk,
  deleteFavoriteThunk,
} from './thunks';
import {
  handlerAllFavoritesSlice,
  handleFulfilled,
  handleAddFavorite,
  handleDeleteFavorite,
} from './handlers';
import { handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavoritesThunk.fulfilled, handlerAllFavoritesSlice)
      .addCase(addFavoriteThunk.fulfilled, handleAddFavorite)
      .addCase(deleteFavoriteThunk.fulfilled, handleDeleteFavorite)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const favoritesReducer = favoritesSlice.reducer;
