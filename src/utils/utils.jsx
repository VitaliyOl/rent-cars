export const generatePrice = cars => {
  const prices = cars.map(car => {
    const rentalPrice = parseInt(car.rentalPrice.replace('$', ''), 10);
    return rentalPrice;
  });

  if (prices.length === 0) {
    return [];
  }

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const result = [];
  for (let i = minPrice; i <= maxPrice; i += 10) {
    result.push(i);
  }

  return result;
};

export const filterCars = (cars, brand, price, minMile, maxMile) => {
  return cars.filter(car => {
    const rentalPrice = parseInt(car.rentalPrice.substring(1));
    const mileage = parseFloat(car.mileage);

    const makeMatch =
      !brand || car.make.toLowerCase().includes(brand.toLowerCase());

    const priceMatch = !price || rentalPrice <= price;
    const minMileMatch = !minMile || mileage >= minMile;
    const maxMileMatch = !maxMile || mileage <= maxMile;

    return makeMatch && priceMatch && minMileMatch && maxMileMatch;
  });
};

export const formatNumber = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const extractNumbers = text => {
  const matches = text.match(/\d+/g);
  return matches ? matches.map(match => parseInt(match, 10)) : [];
};
