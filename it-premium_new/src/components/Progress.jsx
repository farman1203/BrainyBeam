import { motion, useScroll, useSpring } from 'framer-motion';

function Progress() {
    const { scrollYProgress } = useScroll();

    const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return <motion.div className="progress" style={{ scaleX: scale }} />
}

export default Progress;
