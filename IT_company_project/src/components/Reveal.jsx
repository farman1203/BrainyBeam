import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const directionMap = {
  up:    { y: 40, x: 0 },
  left:  { y: 0,  x: -40 },
  right: { y: 0,  x: 40 },
  none:  { y: 0,  x: 0 },
};

const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  const { x, y } = directionMap[direction] ?? directionMap.up;

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
