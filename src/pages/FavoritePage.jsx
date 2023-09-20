import CardList from 'components/CardList/CardList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/Favorites/selector';
import images from '../images/favorite.png';
import { CenteredContent } from './HomePage.styled';

function FavoritePage() {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <>
      {favoriteCars.length === 0 ? (
        <CenteredContent>
          <h2>Please choice your Favorites!</h2>
          <img
            src={images}
            alt="favorites heart"
            width={'450px'}
            height={'auto'}
          />
        </CenteredContent>
      ) : (
        <CardList cars={favoriteCars} />
      )}
    </>
  );
}

export default FavoritePage;
