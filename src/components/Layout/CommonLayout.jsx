import styled from './CommonLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Filter } from '../Filter/Filter';

export const CommonLayout = () => {
  return (
    <>
      <header className={styled.CommonLayout}>
        <Filter />
        <nav className={styled.CommonLayoutNav}>
          <NavLink className={styled.CommonLayoutLink} to="/" end>
            Search
          </NavLink>
          <NavLink className={styled.CommonLayoutLink} to="/favorites">
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
