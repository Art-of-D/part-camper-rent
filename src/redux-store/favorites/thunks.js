import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllFavorites,
  deleteFavoriteCamper,
  addFavoriteCamper,
} from '../../api/mockapi/camperAPI';

export const getFavoritesThunk = createAsyncThunk('getAllFavorites', () => {
  try {
    const resp = fetchAllFavorites();
    return resp;
  } catch (e) {
    throw e;
  }
});

export const deleteFavoriteThunk = createAsyncThunk(
  'deleteFavoritesCamper',
  id => {
    try {
      deleteFavoriteCamper(id);
      return id;
    } catch (e) {
      throw e;
    }
  }
);

export const addFavoriteThunk = createAsyncThunk(
  'addFavoritesCamper',
  async camper => {
    try {
      await addFavoriteCamper(camper);
    } catch (e) {
      throw e;
    }
  }
);
