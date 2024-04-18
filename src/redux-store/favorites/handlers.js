export const handlerAllFavoritesSlice = (state, { payload }) => {
  state.items = payload;
};

export const handleDeleteFavorite = (state, { payload }) => {
  state.items = state.items.filter(camper => camper._id !== payload);
};

export const handleAddFavorite = (state, { payload }) => {
  state.items = [...state.items, payload];
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.error = error.message;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
