import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Lightbulb, Camera } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Counter from '../components/Counter'

const stats = [[1.2, 'K+', 1, 'Projects Completed'], [80, '+', 0, 'Happy Customers'], [6, '+', 0, 'Years Experience']]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(p, [0, 1], [60, -60])
  const y2 = useTransform(p, [0, 1], [-40, 70])
  const sc = useTransform(p, [0, 0.5], [0.9, 1])
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about">
          <div>
            <SectionHeading eyebrow="Who we are" title={<>We bring a deep passion for <em>creative problem solving</em>.</>} />
            <Reveal as="p" className="lead" delay={0.25}>We design and build digital experiences that combine conversion-minded UX, standout visuals and scalable engineering — so your brand gets noticed and remembered.</Reveal>
            <Reveal delay={0.35} className="mt"><Button to="/about">Discover Our Story</Button></Reveal>
          </div>
          <div className="about-vis" aria-hidden="true">
            <motion.div className="art av1" style={{ '--h': 22, y: y1, scale: sc }}><Lightbulb size={72} strokeWidth={1.2} /><b>Strategy</b></motion.div>
            <motion.div className="art av2" style={{ '--h': 36, y: y2, scale: sc }}><Camera size={56} strokeWidth={1.2} /><b>Creative</b></motion.div>
          </div>
        </div>
        <div className="stats">
          {stats.map(([n, s, d, l], i) => (
            <Reveal key={l} delay={i * 0.1} className="stat"><strong><Counter to={n} suffix={s} decimals={d} /></strong><span>{l}</span></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
