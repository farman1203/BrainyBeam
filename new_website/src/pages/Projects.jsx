import { motion, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, CheckCircle2, Tag, Calendar, ExternalLink } from 'lucide-react'
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { projects } from '../data/siteData'
import styles from './Projects.module.css'

const categories = ['All', 'FinTech', 'Healthcare', 'E-Commerce', 'IoT / SaaS', 'EdTech', 'Logistics']

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <ProjectsHero />
      <ProjectsGallery onViewCaseStudy={setSelectedProject} />
      <CtaBanner />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.div>
  )
}

/* ─── Hero ─────────────────────────────────────────────── */
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
            Our Featured
            <br />
            <span className="text-green-gradient">Projects</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Explore digital experiences and technology solutions crafted to solve real business challenges.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

/* ─── Gallery ───────────────────────────────────────────── */
function ProjectsGallery({ onViewCaseStudy }) {
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
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.grid}
            key={activeFilter}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onViewCaseStudy={onViewCaseStudy}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ─── Project Card ──────────────────────────────────────── */
function ProjectCard({ project: p, index, onViewCaseStudy }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.article
      className={`${styles.card} ${index === 0 ? styles.cardFeatured : ''}`}
      variants={fadeUp}
      onClick={() => onViewCaseStudy(p)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Image thumbnail */}
      <div className={styles.thumb}>
        {!imgError ? (
          <img
            src={p.image}
            alt={p.imageAlt}
            className={styles.thumbImg}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className={styles.thumbFallback}
            style={{ background: `linear-gradient(135deg, ${p.color}20 0%, ${p.color}40 100%)` }}
          />
        )}
        {/* Overlay */}
        <div className={styles.thumbOverlay}>
          <button
            className={styles.caseStudyBtn}
            
            aria-label={`View case study for ${p.title}`}
          >
            <ExternalLink size={16} />
            View Case Study
          </button>
        </div>
        {/* Meta badges */}
        <div className={styles.thumbMeta}>
          <span className={styles.thumbCat}>{p.category}</span>
          <span className={styles.thumbYear}><Calendar size={11} />{p.year}</span>
        </div>
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
        <button
          className={styles.viewBtn}
          onClick={() => onViewCaseStudy(p)}
          aria-label={`View case study for ${p.title}`}
        >
          View Case Study <ArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  )
}

/* ─── Case Study Modal ──────────────────────────────────── */
function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null)
  const closeRef = useRef(null)

  // Escape key to close
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    // Trap focus inside modal
    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { last.focus(); e.preventDefault() }
      } else {
        if (document.activeElement === last) { first.focus(); e.preventDefault() }
      }
    }
  }, [onClose])

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Focus close button when modal opens
      setTimeout(() => closeRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, handleKeyDown])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
          aria-modal="true"
          role="dialog"
          aria-label={`Case study: ${project.title}`}
        >
          <motion.div
            className={styles.modal}
            ref={modalRef}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Modal header image */}
            <div className={styles.modalImgWrap}>
              <img
                src={project.image}
                alt={project.imageAlt}
                className={styles.modalImg}
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className={styles.modalImgOverlay} style={{ background: `${project.color}55` }} />
              <button
                ref={closeRef}
                className={styles.modalClose}
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className={styles.modalImgMeta}>
                <span className={styles.modalCat} style={{ background: project.color }}>
                  {project.category}
                </span>
                <span className={styles.modalYear}>{project.year}</span>
              </div>
            </div>

            {/* Modal body — scrollable */}
            <div className={styles.modalBody}>
              <div className={styles.modalTitle}>
                <h2>{project.title}</h2>
              </div>

              {/* Tags */}
              <div className={styles.modalTags}>
                {project.tags.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              {/* Overview */}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Overview</h3>
                <p className={styles.modalText}>{project.overview}</p>
              </div>

              {/* Challenge */}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>The Challenge</h3>
                <p className={styles.modalText}>{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Our Solution</h3>
                <p className={styles.modalText}>{project.solution}</p>
              </div>

              {/* Key Features */}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Key Features</h3>
                <ul className={styles.featureList}>
                  {project.features.map(f => (
                    <li key={f}>
                      <CheckCircle2 size={15} style={{ color: project.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Technologies Used</h3>
                <div className={styles.modalTags}>
                  {project.tags.map(t => (
                    <span key={t} className={styles.techTag} style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}0f` }}>
                      <Tag size={11} />{t}
                    </span>
                  ))}
                </div>
              </div>

              <button className={styles.modalCloseBottom} onClick={onClose}>
                Close Case Study
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── CTA Banner ────────────────────────────────────────── */
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
            <p className={styles.bannerSub}>Let's build your next featured project together.</p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Building <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
