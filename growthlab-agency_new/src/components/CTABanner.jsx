import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Button from './Button'

export default function CTABanner({ title, text, primary, secondary }) {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(p, [0, 0.5, 1], [0.92, 1, 1.03])
  const rot = useTransform(p, [0, 1], [-30, 30])
  return (
    <section className="cb" ref={ref}>
      <div className="container">
        <motion.div className="cb-box" style={{ scale }}>
          <motion.div className="cb-rings" style={{ rotate: rot }} aria-hidden="true"><i /><i /></motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>{text}</motion.p>
          <motion.div className="cta-row" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
            <Button to={primary.to}>{primary.label}</Button>
            {secondary && <Button to={secondary.to} variant="ghost" icon={false}>{secondary.label}</Button>}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
