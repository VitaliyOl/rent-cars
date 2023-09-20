import CardItem from 'components/CardItem/CardItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/Filter/selector';
import { filterCars } from 'utils';

import { ItemContainer, Button } from './CardList.styled';

function CardList({ cars }) {
  const [displayCount, setDisplayCount] = useState(8);
  const { brand, price, minMile, maxMile } = useSelector(selectFilter);

  const filteredCars = filterCars(cars, brand, price, minMile, maxMile);

  const handleLoadMore = () => {
    setDisplayCount(Math.min(displayCount + 8, cars.length));
  };

  return (
    <>
      <ItemContainer>
        {filteredCars.slice(0, displayCount).map((car, index) => {
          return <CardItem key={index} data={car} />;
        })}
      </ItemContainer>
      {displayCount < cars.length && (
        <Button style={{ marginTop: '100px' }} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

export default CardList;
