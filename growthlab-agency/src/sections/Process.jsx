import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Compass, FileText, Sparkles, Rocket } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

const steps = [
  { icon: Compass, t: 'Define Your Vision', d: 'We clarify goals, audience, offer and creative direction so every decision starts with purpose.' },
  { icon: FileText, t: 'Share Your Brief', d: 'Tell us your needs, references, timelines and priorities through a simple, collaborative process.' },
  { icon: Sparkles, t: 'Create & Refine', d: 'We design, shoot, build and polish the work with structured feedback and clear checkpoints.' },
  { icon: Rocket, t: 'Project Delivered', d: 'You receive final assets, campaigns and web experiences, ready to launch with every detail covered.' },
]

export default function Process() {
  const [a, setA] = useState(0)
  const S = steps[a]
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading eyebrow="Design process" title="Process" text="Crafting bold visuals and digital experiences that guide and elevate brands through a thoughtful process." />
        <Reveal className="cta-row tight"><Button href="#contact">Book a Free Call</Button><Button href="#projects" variant="ghost" icon={false}>See Projects</Button></Reveal>
        <div className="proc">
          <div>
            <small className="kick">Strategy to launch</small>
            <h3 className="proc-h">A clearer way to build.</h3>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.t}>
                  <button className={`step ${i === a ? 'on' : ''}`} onClick={() => setA(i)} aria-current={i === a}>
                    <span className="bar"><i key={i === a ? `on${a}` : 'off'} onAnimationEnd={() => i === a && setA((a + 1) % steps.length)} /></span>
                    <b>0{i + 1}</b>
                    <span><strong>{s.t}</strong>{i === a && <motion.em initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{s.d}</motion.em>}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="proc-vis art" style={{ '--h': 22 + a * 8 }} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={a} className="proc-in" initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30, scale: 0.95 }} transition={{ duration: 0.45 }}>
                <span className="proc-n">0{a + 1}</span>
                <S.icon size={72} strokeWidth={1.2} />
                <h4>{S.t}</h4>
                <div className="skel"><i /><i /><i /></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
