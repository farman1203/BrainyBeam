import { useLayoutEffect, useRef } from 'react'
import { gsap } from './scroll'

/* Declarative scroll animations — add a class / data-attribute in the markup and wrap the page in the returned ref:
   .rv              fades + slides up when scrolled into view
   .mk              (headings made with <Split/>) words rise out of a mask
   .scrub           words (.sw) light up as you scroll through the block
   [data-speed]     parallax (positive = moves slower, negative = faster)
   [data-zoom]      the image inside eases from zoomed-in to normal while scrolling
   .wipe            clip-path reveal from the bottom                                           */
export function useReveals(deps = []) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rv').forEach(el =>
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }))
      gsap.utils.toArray('.mk').forEach(el =>
        gsap.fromTo(el.querySelectorAll('.wi'), { yPercent: 115 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.05, scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
      gsap.utils.toArray('.scrub').forEach(el =>
        gsap.fromTo(el.querySelectorAll('.sw'), { opacity: 0.14 }, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true } }))
      gsap.utils.toArray('.inl').forEach(el =>
        gsap.fromTo(el, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }))
      gsap.utils.toArray('.wipe').forEach(el =>
        gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }))
      gsap.utils.toArray('[data-speed]').forEach(el => {
        const s = parseFloat(el.dataset.speed)
        gsap.fromTo(el, { y: s * 90 }, { y: -s * 90, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      gsap.utils.toArray('[data-zoom]').forEach(el => {
        const im = el.querySelector('img')
        if (im) gsap.fromTo(im, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    }, ref)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
