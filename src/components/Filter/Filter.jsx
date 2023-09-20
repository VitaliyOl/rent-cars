import { useDispatch, useSelector } from 'react-redux';
import { selectCarBrands, selectCars } from 'redux/Cars/selector';

import {
  Container,
  InputContainer,
  Label,
  SelectContainer,
  Select,
  FilterButton,
  Input,
  Span,
} from './filter.styled';

import { addToFilter } from '../../redux/Filter/slice';
import { generatePrice } from 'utils';

function Filter() {
  const brands = useSelector(selectCarBrands);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const priceRange = generatePrice(cars);

  const filterData = e => {
    e.preventDefault();

    const { brand, price, from, to } = e.target;

    const filterValues = {
      brand: brand.value,
      price: price.value,
      minMile: from.value,
      maxMile: to.value,
    };
    dispatch(addToFilter(filterValues));
  };

  return (
    <Container onSubmit={filterData}>
      <InputContainer>
        <Label htmlFor="brand">Car brand</Label>
        <SelectContainer>
          <Select id="brand">
            <option value="">All</option>
            {brands.map(brand => (
              <option key={brand} value={brand !== 'All' ? brand : ''}>
                {brand}
              </option>
            ))}
          </Select>
        </SelectContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <SelectContainer>
          <Select id="price">
            <option value="">To: </option>
            {priceRange.map(price => (
              <option key={price} value={price !== 'All' ? price : ''}>
                {price}
              </option>
            ))}
          </Select>
        </SelectContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="price">Сar mileage / km</Label>
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }}>
            <Span className="from">From:</Span>
            <Input type="text" id="from" />
          </div>
          <div style={{ position: 'relative' }}>
            <Span className="to">To:</Span>
            <Input type="text" id="to" />
          </div>
        </div>
      </InputContainer>
      <FilterButton type="submit">Search</FilterButton>
    </Container>
  );
}

export default Filter;
