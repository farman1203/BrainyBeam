import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const fmt = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function Counter({ to, prefix = '', suffix = '', decimals = 0, duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) { ref.current.textContent = prefix + fmt(to, decimals) + suffix; return }
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: v => { if (ref.current) ref.current.textContent = prefix + fmt(v, decimals) + suffix } })
    return () => c.stop()
  }, [inView, reduce, to, prefix, suffix, decimals, duration])
  return <span ref={ref}>{prefix}0{suffix}</span>
}
