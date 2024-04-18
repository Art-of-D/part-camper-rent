import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { CatalogLayout } from './components/Layout/CatalogLayout';
import style from './App.module.css';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

function App() {
  return (
    <div className={style.commonWrapper}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<CatalogLayout />}>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
