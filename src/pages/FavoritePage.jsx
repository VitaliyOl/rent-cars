import CardList from 'components/CardList/CardList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/Favorites/selector';

function FavoritePage() {
  const favoriteCars = useSelector(selectFavorite);

  return <CardList cars={favoriteCars} />;
}

export default FavoritePage;
