import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../../components/CatalogElement/CatalogElement';
import style from './Favorites.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux-store/favorites/selectors';

const Favorites = () => {
  const TO_SHOW = 4;
  const [visibleCampers, setVisibleCampers] = useState(TO_SHOW);
  const handleLoadMore = () => {
    setVisibleCampers(prev => prev + TO_SHOW);
  };

  const favoriteCatalog = useSelector(getFavorites);
  return (
    <>
      {favoriteCatalog.length === 0 && (
        <p className={style.textNone}>You don`t have any chosen campers</p>
      )}
      <div className={style.catalogWrapper}>
        <ul className={style.catalogList}>
          {favoriteCatalog.slice(0, visibleCampers).map(camper => {
            return <CatalogElement key={uuidv4()} camper={camper} />;
          })}
        </ul>
        {visibleCampers < favoriteCatalog.length && (
          <button onClick={handleLoadMore} className={style.loadMoreButton}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default Favorites;
