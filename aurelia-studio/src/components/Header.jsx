// import { useEffect, useLayoutEffect, useRef, useState } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'
// import { gsap, ScrollTrigger, getLenis } from '../lib/scroll'
// import { site } from '../data/site'

// const links = [['Project', '/project'], ['Studio', '/studio'], ['Contact', '/contact']]

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const { pathname } = useLocation()
//   const bar = useRef(null)
//   const menu = useRef(null)

//   useEffect(() => { setOpen(false) }, [pathname])

//   // first visit: logo and links glide in once the intro panel has lifted
//   useLayoutEffect(() => {
//     const kids = bar.current ? Array.from(bar.current.children) : []
//     const delay = Math.max(0.2, 2.2 - performance.now() / 1000)
//     const t = gsap.fromTo(kids, { y: -26, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay, clearProps: 'transform,opacity' })
//     return () => { t.kill(); gsap.set(kids, { clearProps: 'transform,opacity' }) }
//   }, [])

//   // hide when scrolling down, show when scrolling up
//   useEffect(() => {
//     const st = ScrollTrigger.create({
//       start: 0, end: 'max',
//       onUpdate: self => { if (bar.current) bar.current.classList.toggle('hide', self.scroll() > 200 && self.direction === 1) },
//     })
//     return () => st.kill()
//   }, [])

//   useLayoutEffect(() => {
//     const L = getLenis()
//     if (L) { open ? L.stop() : L.start() }
//     document.body.style.overflow = open ? 'hidden' : ''
//     if (!open || !menu.current) return
//     const ctx = gsap.context(() => {
//       gsap.fromTo(menu.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.inOut' })
//       gsap.from('.menu a', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.08, delay: 0.3 })
//     }, menu)
//     return () => ctx.revert()
//   }, [open])
//   useEffect(() => () => { document.body.style.overflow = ''; const L = getLenis(); if (L) L.start() }, [])

//   return (
//     <>
//       <header className="hdr" ref={bar}>
//         <Link to="/" className="hdr-logo" aria-label={`${site.name} home`}>
//           <strong>{site.name}</strong>
//         </Link>
//         <nav className="hdr-nav" aria-label="Primary">
//           {links.map(([t, to]) => <NavLink key={to} to={to} className={({ isActive }) => `ul-link ${isActive ? 'active' : ''}`}>{t}</NavLink>)}
//         </nav>
//         <button className="hdr-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>{open ? 'Close' : 'Menu'}</button>
//       </header>
//       {open && (
//         <div className="menu" id="menu" ref={menu} data-lenis-prevent>
//           <nav aria-label="Mobile">
//             {[['Home', '/'], ...links].map(([t, to]) => <div className="menu-row" key={to}><Link to={to}>{t}</Link></div>)}
//           </nav>
//           <p className="menu-foot">{site.email}<br />{site.phone}</p>
//         </div>
//       )}
//     </>
//   )
// }

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, getLenis } from '../lib/scroll'
import { site } from '../data/site'

const links = [['Project', '/project'], ['Studio', '/studio'], ['Contact', '/contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const bar = useRef(null)
  const menu = useRef(null)

  useEffect(() => { setOpen(false) }, [pathname])

  // hide when scrolling down, show when scrolling up
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: self => { if (bar.current) bar.current.classList.toggle('hide', self.scroll() > 200 && self.direction === 1) },
    })
    return () => st.kill()
  }, [])

  useLayoutEffect(() => {
    const L = getLenis()
    if (L) { open ? L.stop() : L.start() }
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open || !menu.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(menu.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.inOut' })
      gsap.from('.menu a', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.08, delay: 0.3 })
    }, menu)
    return () => ctx.revert()
  }, [open])
  useEffect(() => () => { document.body.style.overflow = ''; const L = getLenis(); if (L) L.start() }, [])

  return (
    <>
      <header className="hdr" ref={bar}>
        <Link to="/" className="hdr-logo" aria-label={`${site.name} home`}>
          <strong>{site.name}</strong>
        </Link>
        <span className="hdr-tag"></span>
        <nav className="hdr-nav" aria-label="Primary">
          {links.map(([t, to]) => <NavLink key={to} to={to} className={({ isActive }) => `ul-link ${isActive ? 'active' : ''}`}>{t}</NavLink>)}
        </nav>
        <button className="hdr-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      {open && (
        <div className="menu" id="menu" ref={menu} data-lenis-prevent>
          <nav aria-label="Mobile">
            {[['Home', '/'], ...links].map(([t, to]) => <div className="menu-row" key={to}><Link to={to}>{t}</Link></div>)}
          </nav>
          <p className="menu-foot">{site.email}<br />{site.phone}</p>
        </div>
      )}
    </>
  )
}

