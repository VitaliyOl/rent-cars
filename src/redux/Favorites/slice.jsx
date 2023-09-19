import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    setFavorites: (state, { payload }) => {
      const addCar = state.favorites.find(car => car.id === payload.id);
      if (!addCar) {
        state.favorites.push(payload);
      }
    },
    removeFavorites: (state, { payload }) => {
      const indexToRemove = state.favorites.findIndex(
        car => car.id === payload.id
      );
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
  },
});

export const { setFavorites, removeFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
