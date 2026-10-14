import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, m, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/** Resets scroll on route change (unless the URL has a #hash) and shows a back-to-top button after scrolling. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 400));

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          className="scroll-to-top"
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowUp size={21} aria-hidden="true" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
