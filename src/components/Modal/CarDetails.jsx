import React from 'react';
import {
  CardList,
  ImgContainer,
  Img,
  Title,
  Description,
  TitleWrap,
  TitleAccessories,
  AccessoriesText,
  TitleRental,
  TextItem,
  CardButton,
  ListConditions,
  ListConditionsItem,
} from './CarDetails.styled';
import useModal from '../../hooks/useModal';
import { extractNumbers, formatNumber } from 'utils';

function CarDetails({ car }) {
  const { openModal } = useModal();

  const handleContainerClick = e => {
    e.stopPropagation();
    openModal();
  };

  const {
    id,
    address,
    fuelConsumption,
    type,
    model,
    img,
    make,
    year,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  const charachteristics = [
    address.split(', ')[1],
    address.split(', ')[2],
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const condition = rentalConditions.split('\n');

  return (
    <>
      <CardList onClick={handleContainerClick}>
        <ImgContainer>
          <Img src={img ? img : ''} alt={`${make} ${model}`} loading="lazy" />
        </ImgContainer>
        <Title>
          {make} <span className="accent">{model}</span>, {year}
        </Title>
        <TextItem>{charachteristics.join(' | ')}</TextItem>
        <Description>{description}</Description>
        <TitleWrap>
          <TitleAccessories>Accessories and functionalities:</TitleAccessories>
          <AccessoriesText>{accessories.join(' | ')}</AccessoriesText>
          <AccessoriesText>{functionalities.join(' | ')}</AccessoriesText>
        </TitleWrap>
        <TitleWrap>
          <TitleRental>Rental Conditions:</TitleRental>
          <ListConditions>
            <ListConditionsItem>
              Minimum age:
              <span>{extractNumbers(rentalConditions)}</span>
            </ListConditionsItem>
            <ListConditionsItem>{condition[1]}</ListConditionsItem>
          </ListConditions>
          <ListConditions>
            <ListConditionsItem>{condition[2]}</ListConditionsItem>
            <ListConditionsItem>
              Mileage: <span>{formatNumber(mileage)}</span>
            </ListConditionsItem>
            <ListConditionsItem>
              Price: <span>{rentalPrice.slice(1)}$</span>
            </ListConditionsItem>
          </ListConditions>
        </TitleWrap>
        <CardButton href="tel:+380730000000">Rental Car</CardButton>
      </CardList>
    </>
  );
}

export default CarDetails;
