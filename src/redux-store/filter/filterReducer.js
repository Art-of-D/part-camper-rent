import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startFiltering: false,
  location: '',
  filters: {
    vehicleEquipment: [],
    vehicleType: [],
  },
};

export const filterReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    startFiltering(state, { payload }) {
      return { ...state, startFiltering: payload };
    },
    setLocation(state, { payload }) {
      return { ...state, location: payload };
    },
    addToFilter(state, { payload }) {
      const { type, item } = payload;
      let updatedFilters = { ...state.filters };
      switch (type) {
        case 'vehicleEquipment':
          updatedFilters.vehicleEquipment = [
            ...state.filters.vehicleEquipment,
            item,
          ];
          break;
        case 'vehicleType':
          updatedFilters.vehicleType = [...state.filters.vehicleType, item];
          break;
      }
      return {
        ...state,
        filters: updatedFilters,
      };
    },
    removeFromFilter(state, { payload }) {
      return {
        ...state,
        filters: {
          ...state.filters,
          vehicleEquipment: state.filters.vehicleEquipment.filter(
            item => item !== item
          ),
          vehicleType: state.filters.vehicleType.filter(
            item => item !== payload.item
          ),
        },
      };
    },
  },
});

export const { setLocation, startFiltering, addToFilter, removeFromFilter } =
  filterReducer.actions;
export default filterReducer.reducer;
