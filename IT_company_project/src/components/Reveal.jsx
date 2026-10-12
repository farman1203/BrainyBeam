import React from 'react';
import { motion } from 'motion/react';

const variants = {
  up: { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 35 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } }
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  once = true,
  amount = 0.15
}) {
  const selected = variants[direction] || variants.up;

  return (
    <motion.div
      className={className}
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
