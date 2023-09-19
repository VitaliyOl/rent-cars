import { AddToFavoriteIcon } from 'images/svgIcon/AddToFavorite';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardList,
  ImgContainer,
  Img,
  Favorite,
  TitleContainer,
  Title,
  TextItem,
  CardButton,
} from './CardItem.styled';

import { removeFavorites, setFavorites } from '../../redux/Favorites/slice';

import { selectFavorite } from '../../redux/Favorites/selector';

function CardItem({ data }) {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const isFavorite = favorites?.some(favCar => favCar.id === data.id);

  const handleFavorite = () => {
    return isFavorite
      ? dispatch(removeFavorites(data))
      : dispatch(setFavorites(data));
  };

  const {
    address,
    rentalCompany,
    type,
    model,
    mileage,
    functionalities,
    img,
    make,
    rentalPrice,
    year,
  } = data;

  const charachteristics = [
    address.split(', ')[1],
    address.split(', ')[2],
    rentalCompany,
    type,
    model,
    mileage,
    functionalities[0],
  ];

  return (
    <>
      <CardList>
        <ImgContainer>
          <Img src={img ? img : ''} alt={`${make} ${model}`} loading="lazy" />
          <Favorite type="button" onClick={handleFavorite}>
            <AddToFavoriteIcon
              id="svg"
              fill={isFavorite ? '#54adff' : 'none'}
            />
          </Favorite>
        </ImgContainer>
        <TitleContainer>
          <Title>
            <span className="make">
              {make} <span className="accent">{model}</span>, {year}
            </span>
            <span className="price">{rentalPrice}</span>
          </Title>
        </TitleContainer>
        <TextItem>{charachteristics.join(' | ')}</TextItem>
        <CardButton>Learn More</CardButton>
      </CardList>
    </>
  );
}

export default CardItem;
