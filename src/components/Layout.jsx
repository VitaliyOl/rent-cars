import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar';

import Loader from './Loader';

function Layout() {
  return (
    <main style={{ width: '1440px', marginLeft: 'auto', marginRight: 'auto' }}>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default Layout;
