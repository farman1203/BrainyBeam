import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, lazy, Suspense } from 'react'
import styles from './HeroSection.module.css'

const HeroCanvas = lazy(() => import('../three/HeroCanvas'))

const words = ['Innovative', 'Scalable', 'Intelligent']

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80])
  const yCanvas = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.bgGlow3} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.inner}>
        {/* Left: Text */}
        <motion.div
          className={styles.textSide}
          style={{ y: yText, opacity }}
        >
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="dot" />
            Next-Generation IT Solutions
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Building{' '}
            <span className={styles.wordCycle}>
              <AnimatedWord words={words} />
            </span>
            <br />
            <span className="text-green-gradient">Digital Products</span>
            <br />
            That Define Tomorrow
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
          >
            We are a premium technology studio crafting extraordinary web applications,
            AI-powered platforms, and scalable cloud architectures for ambitious companies.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/projects" className="btn btn-primary btn-lg">
              View Our Work
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {[
              { v: '150+', l: 'Projects' },
              { v: '12+', l: 'Years' },
              { v: '40+', l: 'Experts' },
            ].map(({ v, l }) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statValue}>{v}</span>
                <span className={styles.statLabel}>{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Canvas */}
        <motion.div
          className={styles.canvasSide}
          style={{ y: yCanvas }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.canvasWrapper}>
            <div className={styles.canvasGlow} />
            <Suspense fallback={<CanvasFallback />}>
              <HeroCanvas />
            </Suspense>
          </div>

          {/* Floating badge */}
          <motion.div
            className={styles.floatingBadge}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={14} />
            AI-Powered
          </motion.div>

          <motion.div
            className={styles.floatingBadge2}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className={styles.dot2} />
            Full-Stack
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className={styles.scrollText}>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function AnimatedWord({ words }) {
  return (
    <motion.span
      className={styles.animatedWord}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 1] }}
    >
      {words[0]}
    </motion.span>
  )
}

function CanvasFallback() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)',
        border: '1px solid rgba(21,128,61,0.2)',
      }} />
    </div>
  )
}
