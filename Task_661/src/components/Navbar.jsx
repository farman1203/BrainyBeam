import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiHeart } from 'react-icons/fi';
import { motion } from 'motion/react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  // { path: '/contact', label: 'Contact' },
  { path: '/wishlist', label: 'Wishlist' },
  { path: '/checkout', label: 'Checkout' },
];

function Navbar() {
  const [opened, setOpened] = useState(false);

  const redirect = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__content container">
        <NavLink to="/" className="navbar__brand">
          UX Shop
        </NavLink>

        <nav className={`navbar__links ${opened ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setOpened(false)}
            >
              {link.label}
              <span className="navbar__link-underline" />
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <motion.button
            className="navbar__cart-btn"
            type="button"
            aria-label="Cart"
            whileHover={{ y: -2 }}
            onClick={() => redirect('/cart')}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
          >
            <FiShoppingCart />
            <span>3</span>
          </motion.button>
          <NavLink to="/wishlist" className="navbar__wishlist-link" aria-label="Wishlist">
            <FiHeart />
          </NavLink>
          <button
            className="navbar__toggle"
            type="button"
            onClick={() => setOpened((prev) => !prev)}
            aria-label="Menu"
          >
            {opened ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
