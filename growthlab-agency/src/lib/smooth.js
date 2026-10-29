import Lenis from 'lenis'

let lenis = null
export const getLenis = () => lenis

// Inertia-style smooth wheel scrolling. Skipped when the user prefers reduced motion.
export function initSmooth() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
  let id
  const raf = t => { lenis.raf(t); id = requestAnimationFrame(raf) }
  id = requestAnimationFrame(raf)
  const onClick = e => {
    const a = e.target.closest && e.target.closest('a[href^="#"]')
    const href = a && a.getAttribute('href')
    if (!href || href === '#') return
    const el = document.querySelector(href)
    if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -70 }) }
  }
  document.addEventListener('click', onClick)
  return () => { cancelAnimationFrame(id); document.removeEventListener('click', onClick); lenis.destroy(); lenis = null }
}

export function scrollToY(y = 0, immediate = false) {
  if (lenis) lenis.scrollTo(y, { immediate })
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' })
}
export function scrollToEl(el) {
  if (lenis) lenis.scrollTo(el, { offset: -70 })
  else el.scrollIntoView({ behavior: 'smooth' })
}
