import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default Layout;
