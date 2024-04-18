import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../../components/CatalogElement/CatalogElement';
import style from './Favorites.module.css';
import { useState, useEffect } from 'react';
import { getFavoritesThunk } from '../../redux-store/favorites/thunks';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFavorites,
  getIsLoadingFavorites,
  getFavoritesError,
} from '../../redux-store/favorites/selectors';

const Favorites = () => {
  const [visibleCampers, setVisibleCampers] = useState(4);
  const favoriteCatalog = useSelector(getFavorites);
  const load = useSelector(getIsLoadingFavorites);
  const error = useSelector(getFavoritesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + 4);
  };

  return (
    <>
      {favoriteCatalog.length === 0 && !load ? (
        <p className={style.textNone}>You don`t have any chosen campers</p>
      ) : (
        <div className={style.catalogWrapper}>
          <ul className={style.catalogList}>
            {favoriteCatalog.slice(0, visibleCampers).map(camper => {
              return (
                <CatalogElement
                  key={uuidv4()}
                  camper={camper}
                  favorite={true}
                />
              );
            })}
          </ul>
          {visibleCampers < favoriteCatalog.length && (
            <button onClick={handleLoadMore} className={style.loadMoreButton}>
              Load more
            </button>
          )}
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};

export default Favorites;
