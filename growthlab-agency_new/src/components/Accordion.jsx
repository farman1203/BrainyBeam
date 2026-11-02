import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'

// items = [[question, answer], …]
export default function Accordion({ items, first = 0 }) {
  const [open, setOpen] = useState(first)
  const uid = useId()
  return (
    <div className="acc">
      {items.map(([q, a], i) => {
        const on = open === i
        return (
          <div className={`acc-i ${on ? 'on' : ''}`} key={q}>
            <h3><button aria-expanded={on} aria-controls={`${uid}-p${i}`} id={`${uid}-b${i}`} onClick={() => setOpen(on ? -1 : i)}>
              {q}<motion.span animate={{ rotate: on ? 45 : 0 }}><Plus size={20} /></motion.span>
            </button></h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-b${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                  <p>{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
