export const handlerAllCatalogSlice = (state, { payload }) => {
  state.items = payload;
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
