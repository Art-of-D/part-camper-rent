import style from './CommonLayout.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const CommonLayout = () => {
  return (
    <>
      <div className={style.commonLayoutWrapper}>
        <header className={style.commonLayout}>
          <Link to="/" className={style.brandName}>
            Camper
            <span className={style.brandSpan}>
              <img
                className={style.brandSVG}
                src="/route.svg"
                alt="route brand"
              />
            </span>
            <span className={style.branSpanSec}>or</span>
          </Link>
          <nav className={style.commonLayoutNav}>
            <NavLink className={style.commonLayoutLink} to="/catalog" end>
              Catalog
            </NavLink>
            <NavLink className={style.commonLayoutLink} to="/favorites">
              Favorites
            </NavLink>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
