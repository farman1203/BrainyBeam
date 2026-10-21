import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, Brain, Cloud, Shield, BarChart3,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { services } from '../data/siteData'
import styles from './Services.module.css'

const iconMap = { Globe, Smartphone, Brain, Cloud, Shield, BarChart3 }
const colors = ['#15803D', '#0D9488', '#7C3AED', '#0369A1', '#B45309', '#0F766E']

export default function Services() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <ServicesHero />
      <ServicesGrid />
      <WhySection />
      <ContactCta />
    </motion.div>
  )
}

function ServicesHero() {
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
            <span className="dot" />Our Services
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything You Need to
            <br />
            <span className="text-green-gradient">Build & Scale</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Six core disciplines. One unified team. Full-stack capability from ideation
            through production — no handoffs, no gaps.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)
  const [active, setActive] = useState(null)

  return (
    <section className={`section ${styles.servicesSection}`} ref={ref}>
      <div className="container">
        <div className={styles.servicesLayout}>
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            const isActive = active === s.id
            const color = colors[i]

            return (
              <motion.div
                key={s.id}
                className={`${styles.serviceItem} ${isActive ? styles.serviceItemActive : ''}`}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(isActive ? null : s.id)}
              >
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconBox} style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    {Icon && <Icon size={20} style={{ color }} />}
                  </div>
                  <div className={styles.serviceNum}>{String(s.id).padStart(2, '0')}</div>
                </div>

                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceShort}>{s.short}</p>

                <motion.div
                  className={styles.serviceExpanded}
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <ul className={styles.featureGrid}>
                    {s.features.map(f => (
                      <li key={f}>
                        <CheckCircle2 size={13} style={{ color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <button className={styles.toggleBtn}>
                  {isActive ? 'Show less' : 'Learn more'}
                  <ArrowRight size={14} style={{ transform: isActive ? 'rotate(90deg)' : 'none', transition: '0.3s' }} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  const reasons = [
    { title: 'Transparent Delivery', desc: 'Daily standups, live staging environments, and complete visibility into every sprint.' },
    { title: 'Senior-Only Teams', desc: 'Every project is staffed with senior engineers. No outsourcing to juniors without oversight.' },
    { title: 'End-to-End Ownership', desc: 'We own the entire process from architecture through deployment and post-launch support.' },
    { title: 'Proven Methodology', desc: 'Battle-tested Agile processes adapted to the unique needs of each engagement.' },
    { title: 'IP Protection', desc: 'All code, designs, and assets transfer fully to you upon project completion.' },
    { title: 'Long-Term Partnership', desc: 'We average a 3+ year relationship with our clients. We\'re invested in your success.' },
  ]

  return (
    <section className={`section ${styles.why}`} ref={ref}>
      <div className="container">
        <div className={styles.whyLayout}>
          <motion.div
            className={styles.whyText}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="section-label"><span className="dot" />Why TechNova</div>
            <h2 className="text-h2">
              We Don't Just Deliver.
              <br />
              <span className="text-green-gradient">We Partner.</span>
            </h2>
            <p className="text-body-lg" style={{ marginTop: 'var(--space-4)' }}>
              The difference between a vendor and a partner is accountability.
              We operate as an extension of your team — aligned with your goals, invested in your outcomes.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-8)' }}>
              Start the Conversation <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.whyGrid}
            variants={staggerContainer(0.08, 0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {reasons.map(({ title, desc }) => (
              <motion.div key={title} className={styles.whyCard} variants={fadeRight}>
                <div className={styles.whyDot} />
                <div>
                  <h4 className={styles.whyTitle}>{title}</h4>
                  <p className={styles.whyDesc}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSub}>Tell us about your project and we'll respond within 24 hours.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
