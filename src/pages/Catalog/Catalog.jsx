import { CatalogElement } from '../../components/CatalogElement/CatalogElement';
import style from './Catalog.module.css';
import { useState, useEffect } from 'react';
import { getCatalogThunk } from '../../redux-store/catalog/thunks';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCatalog,
  getIsLoading,
  getError,
} from '../../redux-store/catalog/selectors';
import {
  getStartFiltering,
  getAllFilters,
} from '../../redux-store/filter/selectors';
import { filteredList } from '../../utils/filteredList';
import {
  startFiltering,
  setLocation,
} from '../../redux-store/filter/filterReducer';

const Catalog = () => {
  const TO_SHOW = 4;
  const [visibleCampers, setVisibleCampers] = useState(TO_SHOW);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const catalog = useSelector(getCatalog);
  const load = useSelector(getIsLoading);
  const error = useSelector(getError);

  const startSearch = useSelector(getStartFiltering);
  const filters = useSelector(getAllFilters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + TO_SHOW);
  };

  useEffect(() => {
    if (startSearch) {
      setFilteredCatalog(filteredList(catalog, filters));
      return () => {
        dispatch(startFiltering(false));
        dispatch(setLocation(''));
      };
    }
    setFilteredCatalog(catalog);
  }, [startSearch, catalog, filters, dispatch]);

  if (load) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.catalogWrapper}>
      {filteredCatalog.length === 0 && (
        <p className={style.textNone}>There are no campers for this order</p>
      )}
      <ul className={style.catalogList}>
        {filteredCatalog.slice(0, visibleCampers).map(camper => {
          return <CatalogElement key={camper._id} camper={camper} />;
        })}
      </ul>
      {visibleCampers < filteredCatalog.length && (
        <div className={style.loadMoreWrapper}>
          <button onClick={handleLoadMore} className={style.loadMoreButton}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
