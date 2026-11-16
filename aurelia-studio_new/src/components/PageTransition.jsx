import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, getLenis } from '../lib/scroll'
import { site } from '../data/site'

// First visit: no cover at all — the Home hero plays its own intro (small photo grows to full screen).
// Every later route change: the dark panel wipes upward.
export default function PageTransition() {
  const { pathname } = useLocation()
  const panel = useRef(null)
  const last = useRef(null)
  useLayoutEffect(() => {
    const p = panel.current
    if (last.current === pathname) return
    if (last.current === null) {
      last.current = pathname
      gsap.set(p, { yPercent: -100 })
      return
    }
    last.current = pathname
    const L = getLenis()
    if (L) L.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    gsap.fromTo(p, { yPercent: 0 }, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', delay: 0.05 })
  }, [pathname])
  return (
    <div className="pt" ref={panel} aria-hidden="true">
      <span className="pt-logo">{site.name}<i /></span>
    </div>
  )
}
