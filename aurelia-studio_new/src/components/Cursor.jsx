import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'

// Custom cursor: grows and shows a label over anything with data-cursor="Label".
export default function Cursor() {
  const dot = useRef(null)
  const label = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const el = dot.current
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' })
    const move = e => {
      xTo(e.clientX); yTo(e.clientY)
      const t = e.target.closest && e.target.closest('[data-cursor]')
      const txt = t ? t.getAttribute('data-cursor') : ''
      label.current.textContent = txt
      el.classList.toggle('big', !!t)
      el.classList.toggle('on', true)
    }
    const out = () => el.classList.remove('on')
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', out)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', out) }
  }, [])
  return <div className="cursor" ref={dot} aria-hidden="true"><span ref={label} /></div>
}
