import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import Button from './Button';
import '../styles/navbar.css';

const navLinks = [
  { name: 'Home',       path: '/' },
  { name: 'About',      path: '/about' },
  { name: 'Services',   path: '/services' },
  { name: 'Projects',   path: '/projects' },
  { name: 'Industries', path: '/industries' },
  { name: 'Contact',    path: '/contact' },
];

export default function Navbar() {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isMobileOpen,  setIsMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      <header className={`navbar-wrapper${isScrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand */}
            <Link to="/" className="brand-logo" aria-label="TechNova Solutions Home">
              <motion.div
                className="brand-icon-box"
                whileHover={{ rotate: 8, scale: 1.06 }}
                transition={{ duration: 0.25 }}
              >
                <Layers size={22} strokeWidth={2.2} />
              </motion.div>
              <div className="brand-text">
                <span className="brand-name">TechNova</span>
                <span className="brand-sub">Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-links-desktop" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link-item${isActive ? ' active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="nav-actions-desktop">
              <Button to="/contact" variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                Let's Talk
              </Button>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
              whileTap={{ scale: 0.92 }}
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.aside
              className="mobile-drawer"
              aria-label="Mobile Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="mobile-drawer-header">
                <Link to="/" className="brand-logo" onClick={closeMenu}>
                  <div className="brand-icon-box" style={{ width: 36, height: 36 }}>
                    <Layers size={18} />
                  </div>
                  <div className="brand-text">
                    <span className="brand-name" style={{ fontSize: '1.1rem' }}>TechNova</span>
                    <span className="brand-sub" style={{ fontSize: '0.65rem' }}>Solutions</span>
                  </div>
                </Link>
                <motion.button
                  type="button"
                  className="mobile-close-btn"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              <nav className="mobile-nav-links">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.28 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `mobile-nav-item${isActive ? ' active' : ''}`
                      }
                      onClick={closeMenu}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={16} opacity={0.5} />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-drawer-footer">
                <Button
                  to="/contact"
                  variant="primary"
                  icon={ArrowRight}
                  onClick={closeMenu}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Let's Talk
                </Button>
                <div className="mobile-contact-snippet">
                  <p><strong>HQ:</strong> Ahmedabad, Gujarat, India</p>
                  <p><strong>Email:</strong> hello@technovasolutions.com</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
