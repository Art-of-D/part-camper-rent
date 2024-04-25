import style from './CatalogLayout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Filter } from '../../Filter/Filter';
import { startFiltering } from '../../../redux-store/filter/filterReducer';
import { useDispatch } from 'react-redux';

export const CatalogLayout = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(startFiltering(true));
  };
  return (
    <>
      <div className={style.catalogLayoutWrapper}>
        <div className={style.catalogLayout}>
          <Filter />
          <div className={style.catalogLayoutWrapper}>
            <button className={style.catalogLayoutButton} onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
