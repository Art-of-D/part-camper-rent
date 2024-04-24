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

const Catalog = () => {
  const TO_SHOW = 4;
  const [visibleCampers, setVisibleCampers] = useState(TO_SHOW);

  const catalog = useSelector(getCatalog);
  const load = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + TO_SHOW);
  };

  if (load) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.catalogWrapper}>
      {catalog.length === 0 && (
        <p className={style.textNone}>There are no campers for this order</p>
      )}
      <ul className={style.catalogList}>
        {catalog.slice(0, visibleCampers).map(camper => {
          return <CatalogElement key={camper._id} camper={camper} />;
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
  );
};

export default Catalog;
