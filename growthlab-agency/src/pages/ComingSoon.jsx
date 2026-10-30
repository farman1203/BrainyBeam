import { useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import Button from '../components/Button'

export default function ComingSoon() {
  const { pathname } = useLocation()
  const name = pathname.replace('/', '').replace(/-/g, ' ') || 'This'
  
  return (
    <section className="soon container">
      <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Phase 2</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        The <em>{name}</em> page is coming soon.
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>We’re building the site step by step. Head back to the homepage in the meantime.</motion.p>
      <Button to="/">Back to Home</Button>
    </section>
  )
}
