import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/data/siteData';
import Brand from './Brand';

const EASE = [0.22, 1, 0.36, 1];

function Navbar() {
  const { pathname } = useLocation();
  // The menu counts as open only on the page it was opened on, so it closes itself on navigation.
  const [openedAt, setOpenedAt] = useState(null);
  const open = openedAt === pathname;
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8));

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenedAt(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={cn('nav-wrap', scrolled && 'is-scrolled')}>
      <nav className="nav" aria-label="Primary">
        <Brand />

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" size="sm" className="nav-cta">
          <Link to="/contact">
            Start a project <ArrowUpRight size={17} className="arrow-nudge" aria-hidden="true" />
          </Link>
        </Button>

        <button
          className="menu"
          type="button"
          onClick={() => setOpenedAt(open ? null : pathname)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <m.li
                  key={link.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 * i, ease: EASE }}
                >
                  <NavLink to={link.to} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </m.li>
              ))}
            </ul>
            <Button asChild size="lg" className="mobile-cta">
              <Link to="/contact">
                Start a project <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
