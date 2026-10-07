import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import Button from './Button';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo" aria-label="TechNova Solutions Home">
              <div className="brand-icon-box">
                <Layers size={22} strokeWidth={2.2} />
              </div>
              <div className="brand-text">
                <span className="brand-name">TechNova</span>
                <span className="brand-sub">Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links-desktop" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link-item ${isActive ? 'active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="nav-actions-desktop">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation Drawer">
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo" onClick={() => setIsMobileOpen(false)}>
            <div className="brand-icon-box" style={{ width: 34, height: 34 }}>
              <Layers size={18} />
            </div>
            <div className="brand-text">
              <span className="brand-name" style={{ fontSize: '1.1rem' }}>TechNova</span>
              <span className="brand-sub" style={{ fontSize: '0.7rem' }}>Solutions</span>
            </div>
          </Link>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `mobile-nav-item ${isActive ? 'active' : ''}`
              }
              end={link.path === '/'}
              onClick={() => setIsMobileOpen(false)}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} opacity={0.6} />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            style={{ width: '100%' }}
            onClick={() => setIsMobileOpen(false)}
          >
            Let's Talk
          </Button>
          <div className="mobile-contact-snippet">
            <p><strong>HQ:</strong> Ahmedabad, Gujarat, India</p>
            <p><strong>Email:</strong> hello@technovasolutions.com</p>
          </div>
        </div>
      </aside>
    </>
  );
}
