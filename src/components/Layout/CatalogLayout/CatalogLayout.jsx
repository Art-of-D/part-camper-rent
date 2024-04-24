import style from './CatalogLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Filter } from '../../Filter/Filter';

export const CatalogLayout = () => {
  return (
    <>
      <div className={style.catalogWrapper}>
        <div className={style.catalogLayout}>
          <Filter />
          <nav className={style.catalogLayoutNav}>
            <NavLink className={style.catalogLayoutLink} to="/" end>
              Search
            </NavLink>
            <NavLink className={style.catalogLayoutLink} to="/favorites">
              Favorites
            </NavLink>
          </nav>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
