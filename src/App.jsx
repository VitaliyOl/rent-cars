import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';
import Layout from 'components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));

function App() {
  return (
    <BrowserRouter basename="/rent-cars">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
