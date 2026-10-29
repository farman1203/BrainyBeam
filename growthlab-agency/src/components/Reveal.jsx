import { motion } from 'motion/react'

export default function Reveal({ children, delay = 0, y = 40, as = 'div', className = '', ...rest }) {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} {...rest}>
      {children}
    </M>
  )
}
