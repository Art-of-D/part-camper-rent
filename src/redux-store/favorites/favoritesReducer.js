import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    removeFromFavorites(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(camper => camper._id !== payload),
      };
    },
  },
});

export default favoritesReducer.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesReducer.actions;
