// HOME PAGE — every section of the home page lives in this one file (styles: ../styles/home.css)
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, Compass, Facebook, FileText, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Rocket, Search, ShoppingBag, Sparkles, Twitter, Youtube } from 'lucide-react'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Img from '../components/Img'
import Marquee from '../components/Marquee'
import Odometer from '../components/Odometer'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { topic } from '../data/images'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { scrollToY } from '../lib/smooth'
import '../styles/home.css'

/* ═════════ HERO ═════════ */
const lines = [['We', 'Make', 'Your'], ['Brand', 'Impossible'], ['to', 'Miss.']]
const ease = [0.22, 1, 0.36, 1]
const VIDEO_SRC = "/hero-video.mp4"
const POSTER = "/hero-img-1.jpg"

function useMedia(q) {
  const [m, setM] = useState(() => window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const f = () => setM(mq.matches)
    mq.addEventListener('change', f)
    return () => mq.removeEventListener('change', f)
  }, [q])
  return m
}

function Hero() {
  const ref = useRef(null)
  const vref = useRef(null)
  const reduce = useReducedMotion()
  const mobile = useMedia('(max-width: 900px)')
  const [failed, setFailed] = useState(false)
  const inView = useInView(ref)

  // Desktop only: scroll progress drives the card → full-screen expansion.
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const k = useTransform(p, [0, 0.7], [1, 0])
  const vScale = useTransform(p, [0, 0.7], [1.3, 1])
  const textOp = useTransform(p, [0, 0.28], [1, 0])
  const textY = useTransform(p, [0, 0.28], [0, -80])
  const textPE = useTransform(p, v => (v > 0.25 ? 'none' : 'auto'))
  const cueOp = useTransform(p, [0, 0.08], [1, 0])
  const capOp = useTransform(p, [0.72, 0.92], [0, 1])
  const capY = useTransform(p, [0.72, 0.92], [30, 0])
  let w = 0

  // React doesn't reliably write the `muted` attribute, which makes browsers block autoplay — set it on the element.
  const play = () => { const v = vref.current; if (v) { const r = v.play(); if (r && r.catch) r.catch(() => { }) } }
  useEffect(() => {
    const v = vref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    if (reduce) return
    if (inView) play()
    else v.pause()
  }, [inView, reduce, failed])

  return (
    <section className="vhero" ref={ref} id="top">
      <div className="vh-sticky">
        <div className="vh-bg" aria-hidden="true" />

        <motion.div className="vh-media" style={mobile ? undefined : { '--k': k }}
          initial={mobile ? { opacity: 0 } : { opacity: 0, y: 70 }} animate={mobile ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ delay: mobile ? 0.3 : 0.6, duration: 1, ease }}>
          <motion.div className="vh-vidwrap" style={mobile ? undefined : { scale: vScale }}>
            {!failed && (
              <video ref={vref} className="vh-video" src={VIDEO_SRC} poster={POSTER} muted loop playsInline autoPlay preload="auto" disablePictureInPicture aria-hidden="true"
                onCanPlay={() => { if (inView && !reduce) play() }} onError={() => setFailed(true)} />
            )}
          </motion.div>
          <div className="vh-shade" aria-hidden="true" />
          {failed && import.meta.env.DEV && <p className="vh-miss">Video not found — put <code>hero-video.mp4</code> in the <code>public</code> folder.</p>}
          {!mobile && (
            <motion.div className="vh-cap" style={{ opacity: capOp, y: capY }}>
              <span>Strategy · Creative · Performance</span>
              <b>Brands that get noticed.</b>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="vh-text" style={mobile ? undefined : { opacity: textOp, y: textY, pointerEvents: textPE }}>
          <div className="vh-copy">
            <motion.span className="tag" initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.1, duration: 0.8 }}>
              <i className="dot" /> Crafting unique brand identities
            </motion.span>
            <h1>
              {lines.map((line, li) => (
                <span className="line" key={li}>
                  {line.map(word => (
                    <motion.span key={word} className={`word ${li === 2 ? 'grad' : ''}`} initial={{ y: '115%', rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.95, delay: 0.25 + 0.09 * w++, ease }}>
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }}>
              A full-service digital marketing, creative and web studio for ambitious brands that refuse to blend in.
            </motion.p>
            <motion.div className="cta-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
              <Button href="#contact">Get Started Now</Button>
              <Button href="#projects" variant="ghost" icon={false}>See Projects</Button>
            </motion.div>
          </div>
        </motion.div>

        {!mobile && (
          <motion.a href="#platforms" className="vh-cue" style={{ opacity: cueOp }} initial={{ y: 10 }} animate={{ y: 0 }} transition={{ delay: 2 }}>
            <span className="mouse"><i /></span>
            <small>Scroll to expand</small>
          </motion.a>
        )}
      </div>
    </section>
  )
}

/* ═════════ PLATFORMS & TECHNOLOGIES ═════════ */
const platforms = [[Search, 'Google'], [Instagram, 'Instagram'], [Facebook, 'Facebook'], [Youtube, 'YouTube'], [Linkedin, 'LinkedIn'], [Twitter, 'X (Twitter)'], [MessageCircle, 'WhatsApp'], [ShoppingBag, 'Shopify']]
const tech = ['WordPress', 'React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'MySQL', 'HTML5']

function Platforms() {
  return (
    <section className="plat" id="platforms" aria-labelledby="plat-h">
      <Reveal className="container plat-head">
        <p>Whether you’re starting out, growing fast or scaling big,</p>
        <h2 id="plat-h">Platforms &amp; Technologies We Work With</h2>
      </Reveal>
      <Marquee speed={38}>{platforms.map(([Icon, n]) => <span className="chip-lg" key={n}><Icon size={20} />{n}</span>)}</Marquee>
      <Marquee speed={44} reverse>{tech.map(n => <span className="chip-lg alt" key={n}>{n}</span>)}</Marquee>
    </section>
  )
}

/* ═════════ SERVICES (sticky stacked cards) ═════════ */
function StackCard({ s, i, last }) {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(p, [0, 0.85], [1, last ? 1 : 0.88])
  const dim = useTransform(p, [0.1, 0.85], [0, last ? 0 : 0.7])
  const imgScale = useTransform(p, [0, 1], [1.18, 1])
  return (
    <div className={`stack-item ${last ? 'last' : ''}`} ref={ref}>
      <motion.article className="stack" style={{ scale, top: `calc(88px + ${i * 16}px)` }}
        initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="stack-txt">
          <span className="stack-num">0{i + 1} / 04</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <ul>
            {s.points.map((pt, k) => (
              <motion.li key={pt} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + k * 0.09, duration: 0.6 }}>
                <span>0{k + 1}</span>{pt}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="stack-vis art" style={{ '--h': s.hue }}>
          <motion.div className="parallax" style={{ scale: imgScale }}><Img src={topic(s.tags, s.lock)} alt={`Sample image for ${s.title}`} /></motion.div>
          <b>0{i + 1}</b>
        </div>
        <motion.span className="stack-dim" style={{ opacity: dim }} aria-hidden="true" />
      </motion.article>
    </div>
  )
}

const featured = services.slice(0, 4)

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading eyebrow="Services" title={<>Everything your brand needs, <em>under one roof</em>.</>} />
        <div className="stack-list">
          {featured.map((s, i) => <StackCard key={s.slug} s={s} i={i} last={i === featured.length - 1} />)}
        </div>
        <div className="center"><Button to="/services">Explore All Services</Button></div>
        <p className="also">Also: {services.slice(4).map((s, i) => <span key={s.slug}>{i ? ' · ' : ''}<Link to={`/services/${s.slug}`}>{s.title}</Link></span>)}</p>
      </div>
    </section>
  )
}

/* ═════════ WHO WE ARE ═════════ */
const stats = [['1.2K+', 'Projects Completed'], ['80+', 'Happy Customers'], ['6+', 'Years Experience']]

function About() {
  const ref = useRef(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(p, [0, 1], [70, -70])
  const y2 = useTransform(p, [0, 1], [-50, 80])
  const sc = useTransform(p, [0, 0.4], [0.88, 1])
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about">
          <div>
            <SectionHeading eyebrow="Who we are" title={<>We bring a deep passion for <em>creative problem solving</em>.</>} />
            <Reveal as="p" className="lead" delay={0.25}>We design and build digital experiences that combine conversion-minded UX, standout visuals and scalable engineering — so your brand gets noticed and remembered.</Reveal>
            <Reveal delay={0.35} className="mt"><Button to="/about">Discover Our Story</Button></Reveal>
          </div>
          <div className="about-vis">
            <motion.div className="art av1" style={{ '--h': 22, y: y1, scale: sc }}><Img src={topic('team,meeting', 51, 900, 900)} alt="Sample image of the creative team at work" /><b>Strategy</b></motion.div>
            <motion.div className="art av2" style={{ '--h': 36, y: y2, scale: sc }}><Img src={topic('office,creative', 52, 800, 800)} alt="Sample image of a creative studio" /><b>Creative</b></motion.div>
          </div>
        </div>
        <div className="stats">
          {stats.map(([v, l], i) => (
            <motion.div key={l} className="stat" initial={{ opacity: 0, y: 60, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }}>
              <Odometer value={v} />
              <span className="stat-l">{l}</span>
              <motion.i className="stat-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═════════ PROCESS ═════════ */
const steps = [
  { icon: Compass, t: 'Define Your Vision', d: 'We clarify goals, audience, offer and creative direction so every decision starts with purpose.' },
  { icon: FileText, t: 'Share Your Brief', d: 'Tell us your needs, references, timelines and priorities through a simple, collaborative process.' },
  { icon: Sparkles, t: 'Create & Refine', d: 'We design, shoot, build and polish the work with structured feedback and clear checkpoints.' },
  { icon: Rocket, t: 'Project Delivered', d: 'You receive final assets, campaigns and web experiences, ready to launch with every detail covered.' },
]
const n = steps.length

function useDesktop() {
  const q = '(min-width: 901px)'
  const [d, setD] = useState(() => window.matchMedia(q).matches)
  useEffect(() => { const m = window.matchMedia(q); const f = () => setD(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  return d
}

function StepRow({ s, i, p, on, onClick }) {
  const fill = useTransform(p, [i / n, (i + 1) / n], [0, 1])
  return (
    <li>
      <button className={`step ${on ? 'on' : ''}`} onClick={onClick} aria-current={on}>
        <span className="bar"><motion.i style={{ scaleY: fill }} /></span>
        <b>0{i + 1}</b>
        <span className="step-t"><strong>{s.t}</strong>
          <AnimatePresence initial={false}>
            {on && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.45 }}>{s.d}</motion.p>}
          </AnimatePresence>
        </span>
      </button>
    </li>
  )
}

// Desktop: section stays pinned while scrolling moves through the four steps.
function Pinned() {
  const ref = useRef(null)
  const [a, setA] = useState(0)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(p, 'change', v => setA(Math.min(n - 1, Math.max(0, Math.floor(v * n)))))
  const tilt = useTransform(p, [0, 1], [-4, 4])
  const S = steps[a]
  const jump = i => { const el = ref.current; scrollToY(el.getBoundingClientRect().top + window.scrollY + ((i + 0.05) / n) * (el.offsetHeight - window.innerHeight)) }
  return (
    <div className="proc-pin" ref={ref}>
      <div className="proc-sticky">
        <div className="container proc">
          <div>
            <small className="kick">Strategy to launch</small>
            <h3 className="proc-h">A clearer way to build.</h3>
            <ol className="steps">{steps.map((s, i) => <StepRow key={s.t} s={s} i={i} p={p} on={i === a} onClick={() => jump(i)} />)}</ol>
          </div>
          <motion.div className="proc-vis art" style={{ '--h': 22 + a * 8, rotate: tilt }} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={a} className="proc-in" initial={{ opacity: 0, y: 40, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -40, scale: 0.92 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <span className="proc-n">0{a + 1}</span>
                <S.icon size={76} strokeWidth={1.2} />
                <h4>{S.t}</h4>
                <div className="skel"><i /><i /><i /></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Tablet / mobile: a vertical timeline whose line fills as you scroll.
function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  return (
    <div className="container">
      <ol className="tl" ref={ref}>
        <span className="tl-line" aria-hidden="true"><motion.i style={{ scaleY: scrollYProgress }} /></span>
        {steps.map((s, i) => (
          <motion.li key={s.t} className="tl-item" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <span className="tl-node"><s.icon size={18} /></span>
            <div className="tl-card"><small>Step 0{i + 1}</small><h3>{s.t}</h3><p>{s.d}</p></div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

function Process() {
  const desktop = useDesktop()
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading eyebrow="Design process" title="Process" text="Crafting bold visuals and digital experiences that guide and elevate brands through a thoughtful process." />
        <Reveal className="cta-row tight"><Button href="#contact">Book a Free Call</Button><Button href="#projects" variant="ghost" icon={false}>See Projects</Button></Reveal>
      </div>
      {desktop ? <Pinned /> : <Timeline />}
    </section>
  )
}

/* ═════════ PROJECTS ═════════ */
function ProjectCard({ p, i }) {
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 140, damping: 18 }), sry = useSpring(ry, { stiffness: 140, damping: 18 })
  const move = e => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 9)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 9)
  }
  const leave = () => { rx.set(0); ry.set(0) }
  return (
    <motion.div className={`pc ${i === 0 ? 'w' : ''}`} initial={{ opacity: 0, y: 80, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div className="pc-tilt" style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }} onPointerMove={move} onPointerLeave={leave}>
        <Link to={`/projects#${p.slug}`} className="pcard art" style={{ '--h': p.hue }}>
          <Img src={topic(p.tags, p.lock, 1100, 800)} alt={`Sample project image: ${p.cat}`} />
          <span className="pcard-n">0{i + 1}</span>
          <span className="pcard-ar"><ArrowUpRight size={20} /></span>
          <span className="pcard-body">
            <small>{p.sub}</small>
            <strong>{p.cat}</strong>
            <span className="pcard-cta">VIEW PROJECT <ArrowUpRight size={14} /></span>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" text="Sample cards with dummy images — real case studies will replace them." />
        <div className="pgrid">{projects.slice(0, 5).map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
        <div className="center"><Button to="/projects">View All Projects</Button></div>
      </div>
    </section>
  )
}

/* ═════════ BRANDS ═════════ */
const brandsA = ['Northwind Foods', 'Lumen Wellness', 'Aurora Realty', 'Pixel Forge', 'Urban Loom', 'Bluebird Travel', 'Evergreen Spa', 'Maple & Co.', 'Zenith Fitness', 'Craft Haven']
const brandsB = ['Orbit Auto', 'Saffron Kitchen', 'Nimbus Tech', 'Velvet Studio', 'Harbor Homes', 'Kite Clothing', 'Summit Labs', 'Olive Dental', 'Ember Café', 'Lotus Interiors']  // DUMMY client names

const Brand = ({ n }) => <span className="brand"><i>{n[0]}</i>{n}</span>

function Brands() {
  return (
    <section className="section brands" id="brands">
      <Reveal className="container sh sh-center">
        <span className="eyebrow">International brands</span>
        <h2>We’re happy to work with <em>well-known brands</em></h2>
      </Reveal>
      <Marquee speed={45}>{brandsA.map(n => <Brand key={n} n={n} />)}</Marquee>
      <Marquee speed={50} reverse>{brandsB.map(n => <Brand key={n} n={n} />)}</Marquee>
    </section>
  )
}

/* ═════════ FAQ ═════════ */
const faqs = [
  ['What services do you offer?', 'Digital marketing, creative, photography, video and web development — as single projects or combined monthly retainers.'],
  ['How do you price projects?', 'Every engagement is quoted on scope. Smaller projects have a fixed fee; larger brands usually move to a monthly retainer.'],
  ['What is a typical project timeline?', 'Websites usually take 4–8 weeks, shoots 2–4 weeks including pre-production, and marketing campaigns run on an ongoing basis.'],
  ['How many revisions are included?', 'Two structured revision rounds per deliverable plus a final polish, with tight and collaborative feedback loops.'],
  ['Which industries do you work with?', 'Lifestyle, beauty, hospitality, technology, real estate and D2C — especially founder-led brands that care about craft.'],
  ['Do you offer ongoing support?', 'Yes. We provide post-launch maintenance, optimization and regular strategy updates so your presence keeps scaling.'],
]

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <em>answered</em>.</>} />
        <Reveal><Accordion items={faqs} /></Reveal>
      </div>
    </section>
  )
}

/* ═════════ CONTACT ═════════ */
const contactSocials = [['Instagram', Instagram], ['Facebook', Facebook], ['LinkedIn', Linkedin]]

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <Reveal as="span" className="eyebrow" y={20}>Initiate a project</Reveal>
          <Reveal as="h2" delay={0.1} className="c-h">Let’s make your brand <em>visible</em>.</Reveal>
          <Reveal as="p" delay={0.2} className="lead">Tell us about your brand and goals. Our team will review your inquiry and get back within one business day.</Reveal>
          <Reveal delay={0.3}>
            <ul className="c-info">
              <li><Mail size={20} /><div><small>Email</small>hello@yourdomain.com</div></li>
              <li><Phone size={20} /><div><small>Phone</small>+00 000 000 0000</div></li>
              <li><MapPin size={20} /><div><small>Office</small>Office address, City, Country</div></li>
            </ul>
            <div className="socials">
              {contactSocials.map(([n, Icon]) => <motion.span key={n} className="soc" role="img" aria-label={`${n} — link coming soon`} title={`${n} — link coming soon`} whileHover={{ y: -4 }}><Icon size={18} /></motion.span>)}
            </div>
          </Reveal>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

/* ═════════ PAGE ═════════ */
export default function Home() {
  useEffect(() => { document.title = 'GrowthLab — Digital Marketing Agency' }, [])
  return (<><Hero /><Platforms /><Services /><About /><Process /><Projects /><Brands /><FAQ /><Contact /></>)
}
