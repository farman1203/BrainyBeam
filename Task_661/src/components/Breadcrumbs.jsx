import { NavLink, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <NavLink to="/">Home</NavLink>
      {pathnames.map((segment, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to} className="breadcrumbs__item">
            <span className="breadcrumbs__separator">/</span>
            {isLast ? <span>{label}</span> : <NavLink to={to}>{label}</NavLink>}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
