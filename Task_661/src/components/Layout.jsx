import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import Breadcrumbs from './Breadcrumbs';

function Layout() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default Layout;
