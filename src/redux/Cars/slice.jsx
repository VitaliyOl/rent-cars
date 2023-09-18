import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './InitialState';
import { fetchCars } from './operations';

const fetchArr = [fetchCars];

const fnctAddMatcher = status => {
  return fetchArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleSuccess = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const HandleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(...fnctAddMatcher('pending')), handlePending)
      .addMatcher(isAnyOf(...fnctAddMatcher('fulfilled')), handleSuccess)
      .addMatcher(isAnyOf(...fnctAddMatcher('rejected')), HandleError),
});

export const carsReducer = carsSlice.reducer;
