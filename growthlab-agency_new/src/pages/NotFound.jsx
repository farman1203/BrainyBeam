import { motion } from 'motion/react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="soon container">
      <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Error 404</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>This page <em>wandered off</em>.</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</motion.p>
      <Button to="/">Back to Home</Button>
    </section>
  )
}
