import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../../components/CatalogElement/CatalogElement';
import style from './Favorites.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux-store/favorites/selectors';
import {
  getAllFilters,
  getStartFiltering,
} from '../../redux-store/filter/selectors';
import { filteredList } from '../../utils/filteredList';
import {
  setLocation,
  startFiltering,
} from '../../redux-store/filter/filterReducer';

const Favorites = () => {
  const TO_SHOW = 4;
  const [visibleCampers, setVisibleCampers] = useState(TO_SHOW);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const startSearch = useSelector(getStartFiltering);
  const filters = useSelector(getAllFilters);
  const favoriteCatalog = useSelector(getFavorites);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + TO_SHOW);
  };

  useEffect(() => {
    if (startSearch) {
      setFilteredCatalog(filteredList(favoriteCatalog, filters));
      return () => {
        dispatch(startFiltering(false));
        dispatch(setLocation(''));
      };
    }
    setFilteredCatalog(favoriteCatalog);
  }, [startSearch, favoriteCatalog, filters, dispatch]);
  return (
    <>
      <div className={style.catalogWrapper}>
        {filteredCatalog.length === 0 && (
          <p className={style.textNone}>You don`t have any chosen campers</p>
        )}
        <ul className={style.catalogList}>
          {filteredCatalog.slice(0, visibleCampers).map(camper => {
            return <CatalogElement key={uuidv4()} camper={camper} />;
          })}
        </ul>
        {visibleCampers < filteredCatalog.length && (
          <button onClick={handleLoadMore} className={style.loadMoreButton}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default Favorites;
