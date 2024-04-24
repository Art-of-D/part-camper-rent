import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { CatalogLayout } from './components/Layout/CatalogLayout/CatalogLayout';
import Home from './pages/Home/Home';
import { CommonLayout } from './components/Layout/CommonLayout/CommonLayout';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path={'/'} element={<CatalogLayout />}>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
