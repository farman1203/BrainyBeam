// ABOUT PAGE — all sections + data in this one file (styles: ../styles/about.css)
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Target, Eye, Heart, Linkedin, Instagram } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import Odometer from '../components/Odometer'
import Img from '../components/Img'
import { topic } from '../data/images'
import '../styles/about.css'

const heroLines = [['We', 'Turn', 'Brands'], ['Into', 'Movements.']]

const storyText = 'GrowthLab began with a simple belief: great marketing should feel less like noise and more like a conversation. We combine strategy, design and data so every brand we touch becomes easier to find, easier to trust and impossible to forget.'
const storyWords = storyText.split(' ')

const stats = [['1.2K+', 'Projects Completed'], ['80+', 'Happy Customers'], ['6+', 'Years Experience'], ['15+', 'Team Members']]

const pillars = [
    { icon: Target, t: 'Our Mission', d: 'To help ambitious businesses get found, get chosen and keep growing — with strategy, creative and data working as one team.' },
    { icon: Eye, t: 'Our Vision', d: 'To be the studio brands trust first when they want marketing that feels human, looks remarkable and performs measurably.' },
    { icon: Heart, t: 'Our Values', d: 'Honest advice, obsessive craft, transparent reporting and relationships that outlast any single campaign.' },
]

const journey = [
    { y: '2019', t: 'The first spark', d: 'Started as a two-person studio helping local businesses with their first website and social presence.' },
    { y: '2020', t: 'Going full-service', d: 'Added SEO, performance marketing and content so clients could work with one team instead of five.' },
    { y: '2022', t: 'Building the team', d: 'Grew into a multi-disciplinary crew of strategists, designers, developers and video makers.' },
    { y: '2024', t: 'Data at the core', d: 'Introduced dashboards and monthly reviews so every rupee spent can be traced to a result.' },
    { y: '2026', t: 'Scaling what works', d: 'Today we partner with growing brands across industries, from first launch to long-term scale.' },
]

const team = [
    { n: 'Aarav Shah', g: 'm', r: 'Founder & Strategy Lead' },
    { n: 'Meera Patel', g: 'f', r: 'Creative Director' },
    { n: 'Kabir Desai', g: 'm', r: 'Head of Performance' },
    { n: 'Isha Trivedi', g: 'f', r: 'SEO & Content Lead' },
]

const principles = [
    ['Data-informed decisions', 'Choices backed by numbers, not hunches.'],
    ['Creative thinking', 'Ideas that stand out in a crowded feed.'],
    ['Transparent reporting', 'Plain-language reports you can actually use.'],
    ['Customized strategies', 'Plans shaped around your goals and budget.'],
    ['Continuous optimization', 'We keep testing, learning and improving.'],
]

const ease = [0.22, 1, 0.36, 1]

/* ───────── SECTIONS ───────── */
function Hero() {
    const ref = useRef(null)
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y1 = useTransform(p, [0, 1], [0, -80])
    const y2 = useTransform(p, [0, 1], [0, 50])
    const y3 = useTransform(p, [0, 1], [0, -40])
    const ty = useTransform(p, [0, 1], [0, 90])
    const to = useTransform(p, [0, 0.8], [1, 0])
    const items = [['ab-img1', y1, 'team,office', 22], ['ab-img2', y2, 'women,business', 36], ['ab-img3', y3, 'men,meeting', 12]]
    let w = 0
    return (
        <section className="ab-hero" ref={ref}>
            <div className="ab-glow" aria-hidden="true" />
            <div className="container">
                <motion.div style={{ y: ty, opacity: to }}>
                    <motion.nav className="crumb" aria-label="Breadcrumb" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Link to="/">Home</Link><span>/</span><b>About</b>
                    </motion.nav>
                    <h1>
                        {heroLines.map((line, li) => (
                            <span className="line" key={li}>
                                {line.map(word => (
                                    <motion.span key={word} className={`word ${li === 1 ? 'grad' : ''}`} initial={{ y: '115%', rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.95, delay: 0.2 + 0.09 * w++, ease }}>{word}&nbsp;</motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                        A creative marketing and web studio helping ambitious brands get found, get chosen and get remembered.
                    </motion.p>
                </motion.div>
                <div className="ab-collage">
                    {items.map(([c, y, seed, h], i) => (
                        <motion.div key={c} className={`art ${c}`} style={{ '--h': h, y }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 + i * 0.15, duration: 1, ease }}>
                            <Img src={topic(seed, 31 + i, 900, 1100)} alt="Sample image of our studio and team at work" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function StoryWord({ w, i, p }) {
    const o = useTransform(p, [i / storyWords.length, (i + 1.5) / storyWords.length], [0.16, 1])
    return <motion.span style={{ opacity: o }}>{w}{' '}</motion.span>
}

function Story() {
    const ref = useRef(null)
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start 85%', 'end 50%'] })
    return (
        <section className="section" id="story">
            <div className="container">
                <SectionHeading eyebrow="Our story" title={<>Marketing with <em>meaning</em>.</>} />
                <p className="ab-big" ref={ref}>{storyWords.map((w, i) => <StoryWord key={i} w={w} i={i} p={p} />)}</p>
                <div className="ab-stats">
                    {stats.map(([v, l], i) => (
                        <motion.div key={l} className="stat" initial={{ opacity: 0, y: 60, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: i * 0.1, ease }} whileHover={{ y: -8 }}>
                            <Odometer value={v} />
                            <span className="stat-l">{l}</span>
                            <motion.i className="stat-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.4 + i * 0.1 }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Mission() {
    const onMove = e => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <section className="section" id="mission">
            <div className="container">
                <SectionHeading eyebrow="What drives us" title={<>Purpose behind <em>every pixel</em>.</>} align="center" />
                <div className="ab-cards">
                    {pillars.map((c, i) => (
                        <motion.article key={c.t} className="mc" onMouseMove={onMove} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.12, ease }} whileHover={{ y: -8 }}>
                            <span className="mc-n">0{i + 1}</span>
                            <motion.span className="mc-ic" whileHover={{ rotate: -8, scale: 1.1 }}><c.icon size={26} /></motion.span>
                            <h3>{c.t}</h3>
                            <p>{c.d}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Journey() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
    const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
    return (
        <section className="section" id="journey">
            <div className="container">
                <SectionHeading eyebrow="Our journey" title={<>From a small studio to a <em>growth partner</em>.</>} align="center" />
                <ol className="jr" ref={ref}>
                    <span className="jr-line" aria-hidden="true"><motion.i style={{ scaleY }} /></span>
                    {journey.map((j, i) => (
                        <motion.li key={j.y} className={`jr-item ${i % 2 ? 'r' : ''}`} initial={{ opacity: 0, x: i % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease }}>
                            <span className="jr-dot" />
                            <div className="jr-card"><b>{j.y}</b><h3>{j.t}</h3><p>{j.d}</p></div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

function Team() {
    return (
        <section className="section" id="team">
            <div className="container">
                <SectionHeading eyebrow="Our team" title={<>The people <em>behind the work</em>.</>} text="Sample team members and photos — swap in your real crew." />
                <div className="tm-grid">
                    {team.map((m, i) => (
                        <motion.article key={m.n} className="tm art" style={{ '--h': 18 + i * 8 }} tabIndex={0} initial={{ opacity: 0, y: 70, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.85, delay: i * 0.1, ease }}>
                            <Img src={topic(m.g === 'f' ? 'woman,portrait' : 'man,portrait', 41 + i, 700, 900)} alt={`Sample portrait for ${m.n}`} />
                            <div className="tm-body">
                                <strong>{m.n}</strong><small>{m.r}</small>
                                <span className="tm-soc" aria-hidden="true"><Linkedin size={16} /><Instagram size={16} /></span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Principles() {
    return (
        <section className="section" id="principles">
            <div className="container pr">
                <div className="pr-side">
                    <SectionHeading eyebrow="How we work" title={<>A partner that <em>thinks like an owner</em>.</>} text="Marketing works best when strategy, creative and data share one table." />
                </div>
                <div>
                    {principles.map(([t, d], i) => (
                        <motion.div key={t} className="pr-row" tabIndex={0} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.06, duration: 0.7, ease }}>
                            <span>0{i + 1}</span>
                            <div><h3>{t}</h3><p>{d}</p></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTA() {
    const ref = useRef(null)
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const scale = useTransform(p, [0, 0.5, 1], [0.92, 1, 1.03])
    const rot = useTransform(p, [0, 1], [-30, 30])
    return (
        <section className="ab-cta" ref={ref}>
            <div className="container">
                <motion.div className="ab-cta-box" style={{ scale }}>
                    <motion.div className="ab-rings" style={{ rotate: rot }} aria-hidden="true"><i /><i /></motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>Ready to make your brand <em>visible</em>?</motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>Tell us where you want to go. We’ll map the strategy to get there.</motion.p>
                    <motion.div className="cta-row" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
                        <Button to="/contact">Let’s Talk Growth</Button>
                        <Button to="/projects" variant="ghost" icon={false}>See Our Work</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

/* ───────── PAGE ───────── */
export default function About() {
    useEffect(() => { document.title = 'About — GrowthLab' }, [])
    return (
        <>
            <Hero /><Story /><Mission /><Journey /><Team /><Principles /><CTA />
        </>
    )
}

