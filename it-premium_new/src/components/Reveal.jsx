import React from 'react';
import { motion, useInView } from 'framer-motion';

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const offset = direction === 'left' ? -55 : direction === 'right' ? 55 : 35;

    return <motion.div ref={ref} className={className}
        initial={{ opacity: 0, x: direction === 'up' ? 0 : offset, y: direction === 'up' ? offset : 0 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>
        {children}
    </motion.div>   
}

export default Reveal;
