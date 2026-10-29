import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function StackCard({ s, i, last }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const rot = useTransform(scrollYProgress, [0, 1], [0, 24])
  return (
    <div className={`stack-item ${last ? 'last' : ''}`} ref={ref}>
      <motion.article className="stack" style={{ scale, top: `calc(92px + ${i * 16}px)` }}>
        <div className="stack-txt">
          <span className="stack-num">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <ul>
            {s.points.map((p, k) => (
              <motion.li key={p} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.15 + k * 0.08 }}>
                <span>0{k + 1}</span>{p}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="stack-vis art" style={{ '--h': s.hue }} aria-hidden="true">
          <motion.div className="vis-ring" style={{ rotate: rot }} />
          <s.icon size={84} strokeWidth={1.2} />
          <b>0{i + 1}</b>
        </div>
      </motion.article>
    </div>
  )
}
