import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { scrollToEl, scrollToY } from '../lib/smooth'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', v => setShow(v > 700))
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => { const el = document.getElementById(hash.slice(1)); if (el) scrollToEl(el); else scrollToY(0, true) }, 80)
      return () => clearTimeout(t)
    }
    scrollToY(0, true)
  }, [pathname, hash])
  return (
    <AnimatePresence>
      {show && (
        <motion.button className="fab" aria-label="Scroll to top" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
          onClick={() => scrollToY(0)}>
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
