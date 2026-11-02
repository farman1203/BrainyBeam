// CONTACT PAGE — info cards, form, next steps and FAQ, all in this one file (styles: ../styles/contact.css)
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import ContactForm from '../components/ContactForm'
import Img from '../components/Img'
import { topic } from '../data/images'
import '../styles/contact.css'

const ease = [0.22, 1, 0.36, 1]

/* ───────── PLACEHOLDER details — replace with your real ones ───────── */
const info = [
  { icon: Mail, t: 'Email', v: 'hello@yourdomain.com', n: 'We reply within one business day' },
  { icon: Phone, t: 'Phone', v: '+00 000 000 0000', n: 'Mon – Sat, 10am – 7pm' },
  { icon: MapPin, t: 'Studio', v: 'Office address, City, Country', n: 'Visits by appointment' },
  { icon: Clock, t: 'Hours', v: 'Mon – Sat · 10:00 – 19:00', n: 'Closed on Sundays' },
]
const socials = [['Instagram', Instagram], ['Facebook', Facebook], ['LinkedIn', Linkedin], ['YouTube', Youtube]]
const next = [
  ['We review your brief', 'A strategist reads your message and does a little homework on your business.'],
  ['A short discovery call', 'We talk goals, timelines and budget — no pressure, no jargon.'],
  ['You get a clear proposal', 'Scope, timeline and pricing in plain language, usually within a few days.'],
]
const faqs = [
  ['How quickly will you respond?', 'We reply to every inquiry within one business day, usually sooner.'],
  ['Do you work with small businesses?', 'Yes — many of our clients are founder-led businesses. We tailor the scope to your stage and budget.'],
  ['Is the first call free?', 'Yes. The discovery call is free and there is no obligation to continue.'],
  ['Can we meet in person?', 'Of course. Share your preferred time and we’ll arrange a visit or a video call.'],
]

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(p, [0, 0.5], [1.2, 1])
  useEffect(() => { document.title = 'Contact — GrowthLab' }, [])
  return (
    <>
      <PageHero crumb="Contact" lines={[['Let’s', 'Start', 'a'], ['Conversation.']]} lead="Tell us about your brand and goals. We’ll show you how we’d help it grow." />

      <section className="ct-info-sec">
        <div className="container ct-info">
          {info.map((c, i) => (
            <motion.div key={c.t} className="ct-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: i * 0.1, ease }} whileHover={{ y: -8 }}>
              <span className="ct-ic"><c.icon size={22} /></span>
              <small>{c.t}</small><strong>{c.v}</strong><em>{c.n}</em>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="form">
        <div className="container contact">
          <div>
            <SectionHeading eyebrow="Initiate a project" title={<>Tell us about <em>your project</em>.</>} text="The more you share, the better we can prepare for our first conversation." />
            <Reveal className="ct-photo art" style={{ '--h': 24 }}>
              <div ref={ref} className="ct-photo-in">
                <motion.div className="parallax" style={{ scale }}><Img src={topic('office,reception,team', 71, 1000, 700)} alt="Sample photo of a friendly agency studio" /></motion.div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="ct-h">What happens next</h3>
              <ol className="ct-steps">
                {next.map(([t, d], i) => <li key={t}><b>0{i + 1}</b><div><strong>{t}</strong><p>{d}</p></div></li>)}
              </ol>
              <div className="socials">
                {socials.map(([n, Icon]) => <motion.span key={n} className="soc" role="img" aria-label={`${n} — link coming soon`} title={`${n} — link coming soon`} whileHover={{ y: -4 }}><Icon size={18} /></motion.span>)}
              </div>
            </Reveal>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq">
          <SectionHeading eyebrow="FAQ" title={<>Good to <em>know</em>.</>} />
          <Reveal><Accordion items={faqs} /></Reveal>
        </div>
      </section>
    </>
  )
}
