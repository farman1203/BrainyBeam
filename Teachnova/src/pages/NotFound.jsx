import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { pageTransition } from '../hooks/useAnimations'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <motion.div className={`page-wrapper ${styles.wrapper}`} {...pageTransition}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.codeBlock}>
            <span className={styles.code}>404</span>
            <div className={styles.codeGlow} />
          </div>

          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.sub}>
            The page you're looking for has moved, been deleted, or never existed.
            Let's get you back on track.
          </p>

          <div className={styles.actions}>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} /> Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline btn-lg">
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>

          <div className={styles.links}>
            <span>Quick links:</span>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
