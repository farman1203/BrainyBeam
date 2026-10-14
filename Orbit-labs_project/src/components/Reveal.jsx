import { m } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Scroll reveal: fades in and rises a short distance the first time it enters the viewport.
 * `once` means it never replays when the user scrolls back and forth.
 * Reduced-motion is handled globally by <MotionConfig reducedMotion="user"> in App.jsx
 * (transform animations are skipped, opacity still fades).
 */
function Reveal({ children, className, delay = 0, y = 24 }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
