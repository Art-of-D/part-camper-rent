import { SVGRender } from '../../SVGRender/SVGRender';
import style from './CamperFavorite.module.css';
import { svgIcons } from '../../../data/svgIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux-store/favorites/favoritesReducer';
import { getFavorites } from '../../../redux-store/favorites/selectors';
import { useEffect, useState } from 'react';

export const CamperFavorite = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteCatalog = useSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favoriteCatalog) {
      const isCamperFavorite = favoriteCatalog.some(
        favorite => favorite._id === camper._id
      );
      setIsFavorite(isCamperFavorite);
    }
  }, [camper._id]);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(camper));
      setIsFavorite(true);
    } else {
      dispatch(removeFromFavorites(camper._id));
      setIsFavorite(false);
    }
  };

  return (
    <>
      <div onClick={handleFavoriteClick}>
        <SVGRender
          className={`${isFavorite ? style.favoriteIconActive : ''} ${
            style.favoriteIcon
          }`}
          svgString={svgIcons.favorite.svgIcon}
        />
      </div>
    </>
  );
};
