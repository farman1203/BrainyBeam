// PROJECTS PAGE — filter + project cards + detail modal, all in this one file (styles: ../styles/projects.css)
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import Button from '../components/Button'
import Img from '../components/Img'
import { projects, projectFilters } from '../data/projects'
import { topic } from '../data/images'
import { getLenis } from '../lib/smooth'
import '../styles/projects.css'

const ease = [0.22, 1, 0.36, 1]

function Modal({ p, onClose }) {
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    const L = getLenis(); if (L) L.stop()
    return () => {
      window.removeEventListener('keydown', k)
      document.body.style.overflow = ''
      const L2 = getLenis(); if (L2) L2.start()
    }
  }, [onClose])
  return (
    <motion.div className="pj-back" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <motion.div className="pj-modal" role="dialog" aria-modal="true" aria-labelledby="pj-title" onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.97 }} transition={{ duration: 0.45, ease }}>
        <button className="pj-x" onClick={onClose} aria-label="Close project details" autoFocus><X size={20} /></button>
        <div className="pj-scroll" data-lenis-prevent>
          <div className="pj-img art" style={{ '--h': p.hue }}><Img src={topic(p.tags, p.lock, 1100, 900)} alt={`Sample image for ${p.cat}`} /></div>
          <div className="pj-info">
            <small className="kick">{p.filter}</small>
            <h2 id="pj-title">{p.cat}</h2>
            <p className="lead">{p.summary}</p>
            <dl className="pj-meta">
              <div><dt>Client</dt><dd>{p.client} <span>(sample)</span></dd></div>
              <div><dt>Year</dt><dd>{p.year}</dd></div>
              <div><dt>Scope</dt><dd>{p.sub}</dd></div>
            </dl>
            <h3>The challenge</h3><p>{p.challenge}</p>
            <h3>What we did</h3><p>{p.solution}</p>
            <div className="pj-res">
              {p.results.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
            </div>
            <small className="pj-note">Illustrative sample results — not a real client.</small>
            <div className="pj-cta"><Button to="/contact">Start a similar project</Button></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { hash } = useLocation()
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const list = filter === 'All' ? projects : projects.filter(p => p.filter === filter)

  useEffect(() => { document.title = 'Projects — GrowthLab' }, [])
  // /projects#slug opens that project directly (used by the home page cards)
  useEffect(() => {
    const p = projects.find(x => x.slug === hash.slice(1))
    if (p) setActive(p)
  }, [hash])

  return (
    <>
      <PageHero crumb="Projects" lines={[['Work', 'That'], ['Speaks', 'Louder.']]} lead="A look at the kind of work we do. These are sample projects with dummy clients and numbers — real case studies will replace them." />
      <section className="section pj-sec">
        <div className="container">
          <div className="pj-filters" role="tablist" aria-label="Filter projects">
            {projectFilters.map(f => (
              <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
                {filter === f && <motion.span layoutId="pj-pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span>{f}</span>
              </button>
            ))}
          </div>
          <motion.div layout className="pj-grid">
            <AnimatePresence mode="popLayout">
              {list.map(p => (
                <motion.button layout key={p.slug} className="pj art" style={{ '--h': p.hue }} onClick={() => setActive(p)} aria-label={`Open project: ${p.cat}`}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, ease }} whileHover={{ y: -8 }}>
                  <Img src={topic(p.tags, p.lock, 1000, 1000)} alt={`Sample image for ${p.cat}`} />
                  <span className="pj-tag">{p.filter}</span>
                  <span className="pj-ar"><ArrowUpRight size={20} /></span>
                  <span className="pj-body"><small>{p.sub}</small><strong>{p.cat}</strong></span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="pj-empty">No projects in this category yet.</p>}
        </div>
      </section>
      <CTABanner title={<>Have a project <em>in mind</em>?</>} text="Share your idea and we’ll show you how we’d approach it." primary={{ to: '/contact', label: 'Start a Project' }} secondary={{ to: '/services', label: 'Our Services' }} />
      <AnimatePresence>{active && <Modal key="m" p={active} onClose={close} />}</AnimatePresence>
    </>
  )
}
