import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/**
 * Counts up once when scrolled into view. Updates the DOM directly (no React re-renders per frame).
 * A screen-reader-only copy always holds the final value; the animated copy is aria-hidden.
 */
function CountUp({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reduce = useReducedMotion();
  const final = `${value}${suffix}`;

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="count-num" style={{ minWidth: `${final.length}ch` }}>
        {reduce ? final : `0${suffix}`}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
}

export default CountUp;
