import { m, useScroll, useSpring } from 'motion/react';

function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return <m.div className="progress" style={{ scaleX }} aria-hidden="true" />;
}

export default Progress;
