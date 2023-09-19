import CardItem from 'components/CardItem/CardItem';
import React from 'react';

import { ItemContainer } from './CardList.styled';

function CardList({ cars }) {
  return (
    <ItemContainer>
      {cars.map((car, index) => {
        return <CardItem key={index} data={car} />;
      })}
    </ItemContainer>
  );
}

export default CardList;
