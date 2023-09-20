import { createSelector } from 'reselect';
export const selectCars = state => state.cars.items;

export const selectCarBrands = createSelector([selectCars], cars => {
  return [...new Set(cars.map(car => car.make))];
});
