import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layers, ArrowRight, ExternalLink } from 'lucide-react'
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { projects } from '../data/siteData'
import styles from './Projects.module.css'

const categories = ['All', 'FinTech', 'Healthcare', 'E-Commerce', 'IoT / SaaS', 'EdTech', 'Logistics']

export default function Projects() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <ProjectsHero />
      <ProjectsGallery />
      <CtaBanner />
    </motion.div>
  )
}

function ProjectsHero() {
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
            <span className="dot" />Our Work
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Products That Drive
            <br />
            <span className="text-green-gradient">Real Impact</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            A curated portfolio of transformative projects — from AI-powered platforms
            to enterprise-scale systems. Each one built with precision.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function ProjectsGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className={`section ${styles.gallery}`} ref={ref}>
      <div className="container">
        {/* Filter tabs */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          key={activeFilter}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`${styles.card} ${index === 0 ? styles.cardFeatured : ''}`}
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Thumbnail */}
      <div
        className={styles.thumb}
        style={{ background: `linear-gradient(135deg, ${p.color}18 0%, ${p.color}35 100%)` }}
      >
        <div className={styles.thumbPattern} style={{ borderColor: `${p.color}20` }} />
        <div className={styles.thumbIcon} style={{ background: p.color }}>
          <Layers size={index === 0 ? 24 : 18} color="white" />
        </div>
        <div className={styles.thumbMeta}>
          <span className={styles.thumbCat}>{p.category}</span>
          <span className={styles.thumbYear}>{p.year}</span>
        </div>

        <motion.div
          className={styles.thumbOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ExternalLink size={20} />
          <span>View Case Study</span>
        </motion.div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.desc}>{p.description}</p>
        <div className={styles.tags}>
          {p.tags.map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CtaBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={styles.ctaBanner} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.bannerInner}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div>
            <h2 className={styles.bannerTitle}>Have a Project in Mind?</h2>
            <p className={styles.bannerSub}>Let's add it to this portfolio.</p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Building <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
