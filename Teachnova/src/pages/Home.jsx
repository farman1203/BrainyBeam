import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, Brain, Cloud, Shield, BarChart3,
  ArrowRight, CheckCircle2, Layers, Cpu, Server
} from 'lucide-react'
import HeroSection from '../components/common/HeroSection'
import { services, projects, process, stats, technologies } from '../data/siteData'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { pageTransition } from '../hooks/useAnimations'
import styles from './Home.module.css'

const iconMap = { Globe, Smartphone, Brain, Cloud, Shield, BarChart3 }

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <TechSection />
      <ProcessSection />
      <CtaSection />
    </motion.div>
  )
}

function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.services}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            <span className="dot" />What We Do
          </motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Services Built for the
            <span className="text-green-gradient"> Modern Era</span>
          </motion.h2>
          <motion.p className="text-body-lg" variants={fadeUp} style={{ maxWidth: 560 }}>
            From concept to launch, we deliver end-to-end digital solutions with the craft and precision your business deserves.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.div
                key={s.id}
                className={styles.serviceCard}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className={styles.serviceIconWrap}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceShort}>{s.short}</p>
                <ul className={styles.featureList}>
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={13} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className={styles.seeAll}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/services" className="btn btn-outline">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.statsGrid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map(({ value, label }) => (
            <motion.div key={label} className={styles.statBox} variants={fadeUp}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            <span className="dot" />Featured Work
          </motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Products We've{' '}
            <span className="text-green-gradient">Shipped</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.slice(0, 4).map((p) => (
            <motion.div
              key={p.id}
              className={styles.projectCard}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className={styles.projectThumb} style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                <div className={styles.projectIcon} style={{ background: p.color }}>
                  <Layers size={20} color="white" />
                </div>
                <span className={styles.projectYear}>{p.year}</span>
              </div>
              <div className={styles.projectBody}>
                <span className={styles.projectCat}>{p.category}</span>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.description.slice(0, 100)}…</p>
                <div className={styles.tagRow}>
                  {p.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.seeAll}>
          <Link to="/projects" className="btn btn-outline">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TechSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)
  const featured = [
    ...technologies.frontend.slice(0, 4),
    ...technologies.backend.slice(0, 4),
    ...technologies.cloud.slice(0, 4),
    ...technologies.ai.slice(0, 4),
  ]

  return (
    <section className={`section ${styles.tech}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            <span className="dot" />Tech Stack
          </motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Powered by the
            <span className="text-green-gradient"> Best Tools</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.techCloud}
          variants={staggerContainer(0.04, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featured.map(({ name }) => (
            <motion.span
              key={name}
              className={styles.techPill}
              variants={fadeUp}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
            >
              <Cpu size={13} />
              {name}
            </motion.span>
          ))}
        </motion.div>

        <div className={styles.seeAll}>
          <Link to="/technologies" className="btn btn-outline">
            Full Tech Stack <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.processSection}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            <span className="dot" />How We Work
          </motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            A Process Designed for
            <span className="text-green-gradient"> Excellence</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.processSteps}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {process.map((p, i) => (
            <motion.div key={p.step} className={styles.processStep} variants={fadeUp}>
              <div className={styles.stepNumber}>{p.step}</div>
              {i < process.length - 1 && <div className={styles.stepLine} />}
              <h3 className={styles.stepTitle}>{p.title}</h3>
              <p className={styles.stepDesc}>{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={styles.ctaSection} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <div className="section-label" style={{ marginBottom: 'var(--space-4)', justifyContent: 'center' }}>
              <span className="dot" />Ready to Build?
            </div>
            <h2 className={styles.ctaTitle}>
              Turn Your Vision Into
              <span className="text-green-gradient"> Reality</span>
            </h2>
            <p className={styles.ctaSub}>
              Let's discuss your project and craft a solution that exceeds expectations.
            </p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
