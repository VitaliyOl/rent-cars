import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCars } from '../redux/Cars/operations';
import CardList from 'components/CardList/CardList';
import Filter from 'components/Filter/Filter';

import { useSelector } from 'react-redux';
import { selectCars } from '../redux/Cars/selector';

function CatalogPage() {
  const allCars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <CardList cars={allCars} />
    </div>
  );
}

export default CatalogPage;
