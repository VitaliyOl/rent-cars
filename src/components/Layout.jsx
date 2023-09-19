import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Header/NavBar';

import Loader from './Loader';

function Layout() {
  return (
    <main style={{ width: '1440px', marginLeft: 'auto', marginRight: 'auto' }}>
      <NavBar />
      <div style={{ padding: '150px 128px' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default Layout;
