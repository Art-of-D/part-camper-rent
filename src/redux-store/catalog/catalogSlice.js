import { createSlice } from '@reduxjs/toolkit';
import { getCatalogThunk } from './thunks';
import { handlerAllCatalogSlice, handleFulfilled } from './handlers';
import { handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCatalogThunk.fulfilled, handlerAllCatalogSlice)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const catalogReducer = catalogSlice.reducer;
