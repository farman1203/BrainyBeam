
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  const isActive = (path) => loc.pathname === path;

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link className="brand" to="/">
          <span className="brand-mark">O</span>
          <span>
            ORBIT<span>LABS</span>
          </span>
        </Link>

        <div className={`links ${open ? 'open' : ''}`}>
          <Link className={isActive('/') ? 'active' : ''} to="/">
            Home
          </Link>
          <Link className={isActive('/about') ? 'active' : ''} to="/about">
            About
          </Link>
          <Link
            className={isActive('/services') ? 'active' : ''}
            to="/services"
          >
            Services
          </Link>
          <Link
            className={isActive('/projects') ? 'active' : ''}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={isActive('/contact') ? 'active' : ''}
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <Link className="nav-cta" to="/contact">
          Start a project <ArrowUpRight size={17} />
        </Link>

        <button
          className="menu"
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
