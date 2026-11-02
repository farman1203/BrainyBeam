import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { ScrollTrigger, reduceMotion } from '../lib/scroll'

// Counts up with anime.js the first time it scrolls into view.
export default function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const fmt = v => v.toFixed(decimals) + suffix
    if (reduceMotion()) { el.textContent = fmt(to); return }
    const st = ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        const o = { v: 0 }
        animate(o, { v: to, duration: 2400, ease: 'outExpo', onUpdate: () => { el.textContent = fmt(o.v) } })
      },
    })
    return () => st.kill()
  }, [to, suffix, decimals])
  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>
}
