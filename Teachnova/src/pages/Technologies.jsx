import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Cpu, Server, Database, Brain, Cloud, Smartphone } from 'lucide-react'
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { technologies } from '../data/siteData'
import styles from './Technologies.module.css'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: Cpu, color: '#15803D', desc: 'Crafting interfaces users love.' },
  { key: 'backend', label: 'Backend', icon: Server, color: '#0D9488', desc: 'Scalable, reliable server-side systems.' },
  { key: 'databases', label: 'Databases', icon: Database, color: '#7C3AED', desc: 'Data storage and retrieval at any scale.' },
  { key: 'ai', label: 'AI & ML', icon: Brain, color: '#B45309', desc: 'Intelligent systems and model integration.' },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: '#0369A1', desc: 'Infrastructure that grows with you.' },
  { key: 'mobile', label: 'Mobile', icon: Smartphone, color: '#0F766E', desc: 'Cross-platform native experiences.' },
]

const levelColors = {
  Expert: { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
  Advanced: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  Intermediate: { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
}

export default function Technologies() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <TechHero />
      <TechGrid />
      <TechPhilosophy />
    </motion.div>
  )
}

function TechHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroInner}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="dot" />Technology Stack
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Powered by the
            <br />
            <span className="text-green-gradient">Right Tools</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            We choose technologies deliberately — evaluating maturity, ecosystem health,
            and long-term maintainability before adding anything to our stack.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function TechGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.techSection}`} ref={ref}>
      <div className="container">
        <div className={styles.categoryGrid}>
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const items = technologies[cat.key] || []

            return (
              <motion.div
                key={cat.key}
                className={styles.category}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.catHeader} style={{ borderColor: `${cat.color}25` }}>
                  <div className={styles.catIcon} style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}>
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className={styles.catLabel}>{cat.label}</h3>
                    <p className={styles.catDesc}>{cat.desc}</p>
                  </div>
                </div>

                <div className={styles.techList}>
                  {items.map(({ name, level }) => {
                    const lc = levelColors[level] || levelColors.Intermediate
                    return (
                      <motion.div
                        key={name}
                        className={styles.techItem}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <span className={styles.techName}>{name}</span>
                        <span
                          className={styles.techLevel}
                          style={{ background: lc.bg, color: lc.text, border: `1px solid ${lc.border}` }}
                        >
                          {level}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TechPhilosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  const principles = [
    { title: 'Battle-Tested First', desc: 'We prefer proven, production-hardened tools over hype-driven choices.' },
    { title: 'Open Ecosystem', desc: 'We favor technologies with strong open-source communities and transparent roadmaps.' },
    { title: 'Right Tool, Right Job', desc: 'No silver bullets. We evaluate and select the best technology for each specific problem.' },
    { title: 'Continuous Investment', desc: 'Our engineers dedicate 20% of their time to learning and evaluating emerging technologies.' },
  ]

  return (
    <section className={`section ${styles.philosophy}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.philHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}><span className="dot" />Our Philosophy</motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            How We Choose
            <span className="text-green-gradient"> Technology</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.philGrid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {principles.map(({ title, desc }) => (
            <motion.div key={title} className={styles.philCard} variants={fadeUp}>
              <div className={styles.philDot} />
              <h3 className={styles.philTitle}>{title}</h3>
              <p className={styles.philDesc}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
