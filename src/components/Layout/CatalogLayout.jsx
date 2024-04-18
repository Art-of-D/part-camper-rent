import styled from './CatalogLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Filter } from '../Filter/Filter';

export const CatalogLayout = () => {
  return (
    <>
      <header className={styled.CatalogLayout}>
        <Filter />
        <nav className={styled.CatalogLayoutNav}>
          <NavLink className={styled.CatalogLayoutLink} to="/" end>
            Search
          </NavLink>
          <NavLink className={styled.CatalogLayoutLink} to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
