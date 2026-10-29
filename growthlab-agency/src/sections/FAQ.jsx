import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const faqs = [
  ['What services do you offer?', 'Digital marketing, creative, photography, video and web development — as single projects or combined monthly retainers.'],
  ['How do you price projects?', 'Every engagement is quoted on scope. Smaller projects have a fixed fee; larger brands usually move to a monthly retainer.'],
  ['What is a typical project timeline?', 'Websites usually take 4–8 weeks, shoots 2–4 weeks including pre-production, and marketing campaigns run on an ongoing basis.'],
  ['How many revisions are included?', 'Two structured revision rounds per deliverable plus a final polish, with tight and collaborative feedback loops.'],
  ['Which industries do you work with?', 'Lifestyle, beauty, hospitality, technology, real estate and D2C — especially founder-led brands that care about craft.'],
  ['Do you offer ongoing support?', 'Yes. We provide post-launch maintenance, optimization and regular strategy updates so your presence keeps scaling.'],
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <em>answered</em>.</>} />
        <Reveal className="acc">
          {faqs.map(([q, a], i) => {
            const on = open === i
            return (
              <div className={`acc-i ${on ? 'on' : ''}`} key={q}>
                <h3><button aria-expanded={on} aria-controls={`f${i}`} id={`fb${i}`} onClick={() => setOpen(on ? -1 : i)}>
                  {q}<motion.span animate={{ rotate: on ? 45 : 0 }}><Plus size={20} /></motion.span>
                </button></h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div id={`f${i}`} role="region" aria-labelledby={`fb${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
