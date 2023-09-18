import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCars } from '../redux/Cars/selector';
import { fetchCars } from '../redux/Cars/operations';

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);
  return (
    <div>
      <h1>CatalogPage</h1>
    </div>
  );
}

export default CatalogPage;
