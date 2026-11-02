// SERVICES PAGE — all sections in this one file (styles: ../styles/services.css)
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Check, Layers, Repeat, Compass } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import CTABanner from '../components/CTABanner'
import Img from '../components/Img'
import { services } from '../data/services'
import { topic } from '../data/images'
import '../styles/services.css'

const ease = [0.22, 1, 0.36, 1]

const engagement = [
  { icon: Layers, t: 'Project-based', d: 'A fixed scope and fee for something with a clear finish line.', list: ['Websites & landing pages', 'Brand identity systems', 'Campaign launches'] },
  { icon: Repeat, t: 'Monthly retainer', d: 'An embedded team that plans, ships and optimizes every month.', list: ['SEO & content', 'Social media & ads', 'Reporting & strategy calls'] },
  { icon: Compass, t: 'Strategy sprint', d: 'A short, focused audit that ends with a clear growth roadmap.', list: ['Funnel & channel audit', 'Competitor review', '90-day action plan'] },
]

const faqs = [
  ['Can I hire you for just one service?', 'Absolutely. Many clients start with a single service — a website, an SEO audit or an ad account — and add more as results come in.'],
  ['How soon will I see results?', 'Paid ads and social can show movement within weeks. SEO is a longer game, usually a few months. We set realistic timelines before we start and never promise fixed rankings.'],
  ['Do you work on a monthly contract?', 'Retainers run month to month after an initial minimum period, so you stay because the work earns it.'],
  ['How do you report progress?', 'A simple dashboard plus a monthly review call. You see spend, leads, sales and what we plan to change next.'],
  ['Can you combine services into one plan?', 'Yes — that is where the best results come from. We will map one plan across search, social, ads and web so every channel supports the others.'],
]

function ServiceRow({ s, i }) {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(p, [0, 0.5], [1.25, 1])
  return (
    <article className="sv" id={s.slug} ref={ref}>
      <motion.div className="sv-vis art" style={{ '--h': s.hue }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease }}>
        <motion.div className="parallax" style={{ scale }}><Img src={topic(s.tags, s.lock, 1000, 840)} alt={`Sample image for ${s.title}`} /></motion.div>
        <span className="sv-ic"><s.icon size={22} /></span>
      </motion.div>
      <div className="sv-txt">
        <Reveal as="span" className="sv-num" y={20}>0{i + 1}</Reveal>
        <Reveal as="h2" delay={0.05}>{s.title}</Reveal>
        <Reveal as="p" delay={0.12} className="lead">{s.detail}</Reveal>
        <Reveal as="ul" delay={0.18} className="sv-pts">
          {s.points.map(pt => <li key={pt}><Check size={18} />{pt}</li>)}
        </Reveal>
        <Reveal as="small" delay={0.22} className="sv-best">{s.best}</Reveal>
        <Reveal delay={0.26} className="cta-row tight"><Button to="/contact">Get a Quote</Button><Button to="/projects" variant="ghost" icon={false}>See Related Work</Button></Reveal>
      </div>
    </article>
  )
}

export default function Services() {
  useEffect(() => { document.title = 'Services — GrowthLab' }, [])
  return (
    <>
      <PageHero crumb="Services" lines={[['Services', 'That'], ['Move', 'the', 'Needle.']]} lead="Strategy, creative and performance under one roof — pick one service or combine them into a full-funnel plan.">
        <motion.div className="sv-jump" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          {services.map(s => <a key={s.slug} href={`#${s.slug}`}><s.icon size={16} />{s.title}</a>)}
        </motion.div>
      </PageHero>

      <section className="section sv-sec">
        <div className="container sv-list">{services.map((s, i) => <ServiceRow key={s.slug} s={s} i={i} />)}</div>
      </section>

      <section className="section" id="engagement">
        <div className="container">
          <SectionHeading eyebrow="How we work together" title={<>Flexible ways to <em>engage</em>.</>} align="center" />
          <div className="eng">
            {engagement.map((e, i) => (
              <motion.article key={e.t} className="eng-card" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.12, ease }} whileHover={{ y: -8 }}>
                <span className="eng-ic"><e.icon size={24} /></span>
                <h3>{e.t}</h3><p>{e.d}</p>
                <ul>{e.list.map(l => <li key={l}><Check size={16} />{l}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq">
          <SectionHeading eyebrow="FAQ" title={<>Before you <em>decide</em>.</>} />
          <Reveal><Accordion items={faqs} /></Reveal>
        </div>
      </section>

      <CTABanner title={<>Not sure where to <em>start</em>?</>} text="Tell us your goal. We’ll recommend the shortest path to it." primary={{ to: '/contact', label: 'Let’s Talk Growth' }} secondary={{ to: '/projects', label: 'See Our Work' }} />
    </>
  )
}
