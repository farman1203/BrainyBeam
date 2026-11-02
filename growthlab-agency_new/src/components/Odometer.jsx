import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

const cells = Array.from({ length: 20 }, (_, i) => i % 10)

// Each digit is a spinning reel that lands on its value; suffix characters stay static.
export default function Odometer({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  return (
    <span className="odo" ref={ref} role="text" aria-label={value}>
      {[...value].map((c, i) => /\d/.test(c) ? (
        <span className="odo-d" key={i} aria-hidden="true">
          <motion.span className="odo-col" initial={{ y: '0em' }} animate={{ y: inView ? `${-(10 + Number(c))}em` : '0em' }}
            transition={{ duration: reduce ? 0 : 1.9 + i * 0.3, delay: reduce ? 0 : i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
            {cells.map((d, k) => <span key={k}>{d}</span>)}
          </motion.span>
        </span>
      ) : <span className="odo-s" key={i} aria-hidden="true">{c}</span>)}
    </span>
  )
}
