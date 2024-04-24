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

  const findFavorite = camper => {
    const favoriteCamper = favoriteCatalog.find(
      favoriteCamper => camper._id === favoriteCamper?._id
    );
    if (favoriteCamper !== undefined) {
      const { _id } = favoriteCamper;
      return _id;
    } else {
      return -1;
    }
  };

  useEffect(() => {
    const result = findFavorite(camper);
    if (result !== -1) {
      setIsFavorite(true);
    }
  }, [isFavorite]);

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
