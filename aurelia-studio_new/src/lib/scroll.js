import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)
export { gsap, ScrollTrigger }

let lenis = null
export const getLenis = () => lenis
export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger stays perfectly in sync.
export function initScroll() {
  if (reduceMotion()) return () => {}
  lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = t => lenis.raf(t * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return () => { gsap.ticker.remove(tick); lenis.destroy(); lenis = null }
}
