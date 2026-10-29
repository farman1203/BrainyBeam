import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { Search, Share2, MousePointerClick, Code2 } from 'lucide-react'
import Button from '../components/Button'

const lines = [['We', 'Make', 'Your'], ['Brand', 'Impossible'], ['to', 'Miss.']]
const chips = [[Search, 'SEO', 'c1', 5], [Share2, 'Reels', 'c2', 6], [MousePointerClick, 'Ads', 'c3', 7], [Code2, 'Web', 'c4', 5.5]]
const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(p, [0, 1], [0, 170])
  const opacity = useTransform(p, [0, 0.7], [1, 0])
  const scale = useTransform(p, [0, 1], [1, 0.92])
  const chipY = useTransform(p, [0, 1], [0, -140])
  const orbY = useTransform(p, [0, 1], [0, 240])
  const mx = useMotionValue(-600), my = useMotionValue(-600)
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 })
  const onMove = e => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left - 250); my.set(e.clientY - r.top - 250) }
  let w = 0

  return (
    <section className="hero" ref={ref} id="top" onPointerMove={onMove}>
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="orb orb1" style={{ y: orbY }} aria-hidden="true" />
      <div className="orb orb2" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true"><i /><i /><i /></div>
      <motion.div className="spot" style={{ x: sx, y: sy }} aria-hidden="true" />

      <motion.div className="chips" style={{ y: chipY }}>
        {chips.map(([Icon, label, cls, dur], i) => (
          <motion.div key={label} className={`chip ${cls}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 + i * 0.12, type: 'spring', stiffness: 160, damping: 14 }} whileHover={{ scale: 1.1 }}>
            <motion.span animate={{ y: [0, i % 2 ? 10 : -10, 0] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}>
              <Icon size={18} />{label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="container hero-in" style={{ y, opacity, scale }}>
        <motion.span className="tag" initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.1, duration: 0.8 }}>
          <i className="dot" /> Crafting unique brand identities
        </motion.span>
        <h1>
          {lines.map((line, li) => (
            <span className="line" key={li}>
              {line.map(word => (
                <motion.span key={word} className={`word ${li === 2 ? 'grad' : ''}`} initial={{ y: '115%', rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.95, delay: 0.25 + 0.09 * w++, ease }}>
                  {word}&nbsp;
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }}>
          A full-service digital marketing, creative and web studio for ambitious brands that refuse to blend in.
        </motion.p>
        <motion.div className="cta-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
          <Button href="#contact">Get Started Now</Button>
          <Button href="#projects" variant="ghost" icon={false}>See Projects</Button>
        </motion.div>
      </motion.div>

      <motion.a href="#platforms" className="cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <span className="mouse"><i /></span>
        <small>Scroll down to see services</small>
      </motion.a>
    </section>
  )
}
