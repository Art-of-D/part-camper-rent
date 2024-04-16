import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { CommonLayout } from './components/Layout/CommonLayout';
import { Catalog } from './components/Catalog/Catalog';
import { fetchAllData } from './mockapi/camperAPI';
import style from './App.module.css';

function App() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchAllData();
      console.log(response);
      setCatalog(response);
    })();
  }, []);

  return (
    <div className={style.commonWrapper}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Catalog catalog={catalog} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
