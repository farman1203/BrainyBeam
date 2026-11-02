import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks } from '../data/nav'
import { services } from '../data/services'
import { getLenis } from '../lib/smooth'

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dd, setDd] = useState(false)
  const [acc, setAcc] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', v => setScrolled(v > 40))

  const isActive = l =>
    l.to === '/' ? pathname === '/' && !hash : l.to.includes('#') ? pathname + hash === l.to : pathname.startsWith(l.to)

  useEffect(() => { setOpen(false); setDd(false) }, [pathname, hash])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const L = getLenis(); if (L) { open ? L.stop() : L.start() }
    const k = e => { if (e.key === 'Escape') { setOpen(false); setDd(false) } }
    const mq = window.matchMedia('(min-width: 1081px)')
    const m = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', k)
    mq.addEventListener('change', m)
    return () => { window.removeEventListener('keydown', k); mq.removeEventListener('change', m); document.body.style.overflow = ''; const L = getLenis(); if (L) L.start() }
  }, [open])

  return (
    <>
      <motion.header className={`nav ${scrolled || open ? 'nav-solid' : ''}`} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="container nav-in">
          <Link to="/" aria-label="GrowthLab home"><Logo /></Link>
          <nav aria-label="Primary" className="nav-links">
            {navLinks.map(l => l.dropdown ? (
              <div key={l.to} className="dd" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}
                onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDd(false) }}>
                <Link to={l.to} className={`nl ${isActive(l) ? 'active' : ''}`}>{l.label}</Link>
                <button className="chev" aria-label="Toggle services menu" aria-expanded={dd} onClick={() => setDd(d => !d)}><ChevronDown size={16} /></button>
                <AnimatePresence>
                  {dd && (
                    <motion.ul className="dd-menu" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}>
                      {services.map(s => <li key={s.slug}><Link to={`/services#${s.slug}`}><s.icon size={16} />{s.title}</Link></li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.to} to={l.to} className={`nl ${isActive(l) ? 'active' : ''}`}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-cta"><Button to="/contact">Let’s Talk</Button></div>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Rendered OUTSIDE the header: backdrop-filter on the header would otherwise trap this fixed panel. */}
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" data-lenis-prevent className="mnav" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
            <nav aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + i * 0.06 }}>
                  {l.dropdown ? (
                    <>
                      <button className={`mlink macc ${isActive(l) ? 'active' : ''}`} aria-expanded={acc} onClick={() => setAcc(a => !a)}>
                        {l.label}<ChevronDown size={22} style={{ transform: acc ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }} />
                      </button>
                      <AnimatePresence initial={false}>
                        {acc && (
                          <motion.ul className="msub" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                            <li><Link to={l.to}>All services</Link></li>
                            {services.map(s => <li key={s.slug}><Link to={`/services#${s.slug}`}>{s.title}</Link></li>)}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : <Link to={l.to} className={`mlink ${isActive(l) ? 'active' : ''}`}>{l.label}</Link>}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}><Button to="/contact">Let’s Talk</Button></motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
