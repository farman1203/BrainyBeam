import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

// lines = [['Words','of','line','one'], ['Gradient','last','line']]
export default function PageHero({ crumb, lines, lead, children }) {
  let w = 0
  return (
    <section className="ph">
      <div className="ph-glow" aria-hidden="true" />
      <div className="container">
        <motion.nav className="crumb" aria-label="Breadcrumb" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Link to="/">Home</Link><span>/</span><b>{crumb}</b>
        </motion.nav>
        <h1>
          {lines.map((line, li) => (
            <span className="line" key={li}>
              {line.map(word => (
                <motion.span key={word + li} className={`word ${li === lines.length - 1 ? 'grad' : ''}`} initial={{ y: '115%', rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.95, delay: 0.2 + 0.09 * w++, ease }}>{word}&nbsp;</motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>{lead}</motion.p>
        {children}
      </div>
    </section>
  )
}
