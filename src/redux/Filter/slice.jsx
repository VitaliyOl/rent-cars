import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    price: '',
    minMile: '',
    maxMile: '',
  },
  reducers: {
    addToFilter: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { addToFilter, removeFromFilter } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
