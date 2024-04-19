import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../../components/CatalogElement/CatalogElement';
import style from './Catalog.module.css';
import { useState, useEffect } from 'react';
import { getCatalogThunk } from '../../redux-store/catalog/thunks';
import { getFavoritesThunk } from '../../redux-store/favorites/thunks';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCatalog,
  getIsLoading,
  getError,
} from '../../redux-store/catalog/selectors';
import {
  getFavorites,
  getIsLoadingFavorites,
  getFavoritesError,
} from '../../redux-store/favorites/selectors';

const Catalog = () => {
  const [visibleCampers, setVisibleCampers] = useState(4);

  const catalog = useSelector(getCatalog);
  const load = useSelector(getIsLoading);
  const error = useSelector(getError);

  const favoriteCatalog = useSelector(getFavorites);
  const loadFavorite = useSelector(getIsLoadingFavorites);
  const errorFavorite = useSelector(getFavoritesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogThunk());
    dispatch(getFavoritesThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + 4);
  };

  return (
    <>
      {catalog.length === 0 && !load && !loadFavorite && (
        <p className={style.textNone}>There is no campers for this order</p>
      )}
      {(error || errorFavorite) && <p>{error}</p>}
      {!load && !loadFavorite && (
        <div className={style.catalogWrapper}>
          <ul className={style.catalogList}>
            {catalog.slice(0, visibleCampers).map(camper => {
              const favorite = favoriteCatalog.some(
                favoriteCamper => favoriteCamper?._id === camper._id
              );
              return (
                <CatalogElement
                  key={uuidv4()}
                  camper={camper}
                  favorite={favorite}
                />
              );
            })}
          </ul>
          {visibleCampers < catalog.length && (
            <div className={style.loadMoreWrapper}>
              <button onClick={handleLoadMore} className={style.loadMoreButton}>
                Load more
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Catalog;
