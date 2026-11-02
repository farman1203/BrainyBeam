import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap, ScrollTrigger, getLenis, reduceMotion } from '../lib/scroll'
import { useReveals } from '../lib/reveal'
import { pic } from '../lib/images'
import Scene3D from '../components/Scene3D'
import Split, { ScrubText } from '../components/Split'
import Img from '../components/Img'
import Arrow from '../components/Arrow'
import Counter from '../components/Counter'
import Magnetic from '../components/Magnetic'
import { projects } from '../data/projects'
import { site } from '../data/site'
import '../styles/home.css'

const pad = n => String(n).padStart(2, '0')
// The reference site uses photography only. Flip to true to bring the Three.js scenes back (hero + CTA).
const SHOW_3D = false

/* ═════════ 1. HERO — a small photo grows from the centre to fill the screen, then the headline rises ═════════ */
const heroLines = [['Digital', 'work', 'for'], ['everyday', 'growth.']]
let introPlayed = false // first page load starts straight away; coming back to Home later waits for the page wipe

function Hero() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const box = ref.current.querySelector('.hero-box')
      if (reduceMotion()) return
      const W = ref.current.offsetWidth, H = ref.current.offsetHeight
      const sw = Math.max(W * 0.26, 170) // size of the small photo at the start
      const delay = introPlayed ? 0.6 : 0.25
      introPlayed = true
      gsap.timeline({ delay, defaults: { ease: 'power4.out' } })
        .fromTo(box, { width: sw, height: sw / 1.75 }, { width: W, height: H, duration: 2, ease: 'power3.inOut', onComplete: () => gsap.set(box, { width: '100%', height: '100%' }) }, 0)
        .from('.hero-veil', { opacity: 0, duration: 1, ease: 'none' }, 1.2)
        .from('.hero h1 .wi', { yPercent: 120, rotate: 4, duration: 1.3, stagger: 0.09 }, 1.6)
        .from('.hero-sub > *', { y: 30, opacity: 0, duration: 1, stagger: 0.12 }, 2.1)
      // scroll: photo drifts slower than the page, copy lifts and fades
      gsap.to('.hero-bg', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-copy', { yPercent: -16, opacity: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: '75% top', scrub: true } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section className="hero" ref={ref}>
      <div className="hero-frame">
        <div className="hero-box">
          <div className="hero-bg"><Img {...pic('hero-facade')} eager /></div>
          <div className="hero-veil" />
        </div>
      </div>
      {SHOW_3D && <div className="hero-3d"><Scene3D variant="city" /></div>}
      <div className="hero-copy">
        <h1 aria-label="Digital work for everyday growth.">
          {heroLines.map((line, li) => (
            <span className="line" key={li} aria-hidden="true">
              {line.map(w => (
                <Fragment key={w}>
                  <span className="w"><span className={`wi ${w === 'everyday' ? 'serif' : ''}`}>{w}</span></span>{' '}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>
        <div className="hero-sub">
          <p>Brands, websites and campaigns designed around the people who use them — and built to keep working long after launch.</p>
          <Link className="ul-link" to="/project">See our work <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}

/* ═════════ 2. STATEMENT ═════════ */
const statement = [
  'We make digital work people use every day:',
  { img: 'material-brick' }, 'websites that sell, brands that stick,',
  { img: 'studio-model-white' }, 'and campaigns built to outlast the trend.',
]

function Statement() {
  return (
    <section className="stmt wrap">
      <ScrubText as="h2" parts={statement} className="stmt-t" />
      <p className="rv"><Link className="ul-link" to="/studio">About the studio <Arrow /></Link></p>
    </section>
  )
}

/* ═════════ 3. SERVICES — "Every stage, in house" ═════════ */
const groups = [
  {
    label: 'Create', items: [
      { t: 'Brand & identity', d: 'Strategy, naming, logos and guidelines that make a business instantly recognisable.', img: 'library-cover' },
      { t: 'Websites & apps', d: 'Fast, accessible, conversion-minded sites designed and built by one team.', img: 'stone-corner' },
      { t: 'Content & social', d: 'Platform-native content and community care that earns attention every week.', img: 'life-gallery' },
      { t: 'Video & motion', d: 'Short films, reels and motion systems that make ideas easy to understand.', img: 'copper-house' },
    ]
  },
  {
    label: 'Grow', items: [
      { t: 'Search (SEO)', d: 'Technical fixes, content and authority building that compound month after month.', img: 'studio-drafting' },
      { t: 'Paid media', d: 'Google, Meta and YouTube campaigns planned around your margins and tested weekly.', img: 'school-corridor' },
      { t: 'Analytics & CRO', d: 'Clear tracking and steady experiments that turn more visitors into customers.', img: 'library-brick-detail' },
      { t: 'Lifecycle & email', d: 'Flows and campaigns that welcome, nurture and bring customers back.', img: 'studio-model-section' },
    ]
  },
]

// Desktop: the group pins to the screen and scrolling steps through its services one by one (01 → 02 → 03 → 04).
// Clicking a service scrolls to its step. Mobile / tablet: plain tap-to-open accordion.
function Group({ label, items }) {
  const [a, setA] = useState(0)
  const root = useRef(null)
  const st = useRef(null)
  const N = items.length

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 901px)', () => {
      st.current = ScrollTrigger.create({
        trigger: root.current, start: 'top 72px', end: () => '+=' + Math.round(N * window.innerHeight * 0.55),
        pin: true, invalidateOnRefresh: true,
        onUpdate: self => setA(Math.min(N - 1, Math.floor(self.progress * N))),
      })
      return () => { st.current = null }
    })
    return () => mm.revert()
  }, [N])

  const pick = k => {
    const s = st.current
    if (!s) return setA(k)
    const y = s.start + ((k + 0.5) / N) * (s.end - s.start)
    const L = getLenis()
    if (L) L.scrollTo(y, { duration: 1.2 }); else window.scrollTo({ top: y })
  }

  return (
    <div className="sg" ref={root}>
      <div className="sg-list rv">
        <h3 className="sg-label">{label}</h3>
        {items.map((it, i) => (
          <div key={it.t} className={`sg-item ${a === i ? 'on' : ''}`}>
            <button className="sg-btn" aria-expanded={a === i} onClick={() => pick(i)}>
              <span>{pad(i + 1)}</span><h4>{it.t}</h4>
            </button>
            <div className="sg-desc"><p>{it.d}</p></div>
          </div>
        ))}
      </div>
      <div className="sg-media rv">
        {items.map((it, i) => <div key={it.t} className={`sg-img ${a === i ? 'on' : ''}`}><Img {...pic(it.img, '')} /></div>)}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="svc wrap">
      <div className="svc-head">
        <Split text="Every stage, in house" />
        <p className="rv lead">From the first workshop to the year after launch, one team carries the project — so nothing is lost between idea and result.</p>
      </div>
      {groups.map(g => <Group key={g.label} {...g} />)}
    </section>
  )
}

/* ═════════ 4. SELECTED WORK — full-screen slider ═════════ */
const HIDDEN = 'inset(0% 0% 0% 100%)', SHOWN = 'inset(0% 0% 0% 0%)'

function WorkSlider() {
  const N = projects.length
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const root = useRef(null)
  const slides = useRef([])
  const bar = useRef(null)
  const cur = useRef(0)
  const tw = useRef(null)
  const pausedRef = useRef(false)
  const busy = useRef(false) // ignore clicks while a wipe is running, so slides never get stuck half-revealed

  const go = useCallback(n => {
    n = (n + N) % N
    if (n === cur.current || busy.current) return
    busy.current = true
    const out = slides.current[cur.current], inn = slides.current[n]
    slides.current.forEach(s => { if (s !== out && s !== inn) gsap.set(s, { clipPath: HIDDEN, zIndex: 1 }) })
    gsap.set(out, { clipPath: SHOWN, zIndex: 2 })
    gsap.set(inn, { clipPath: HIDDEN, zIndex: 3 })
    gsap.to(inn, { clipPath: SHOWN, duration: 1.1, ease: 'power4.inOut', onComplete: () => { gsap.set(out, { clipPath: HIDDEN, zIndex: 1 }); busy.current = false } })
    const im = inn.querySelector('img')
    if (im) gsap.fromTo(im, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: 'power3.out' })
    cur.current = n
    setI(n)
  }, [N])

  useLayoutEffect(() => {
    slides.current.forEach((s, k) => gsap.set(s, { clipPath: k === 0 ? SHOWN : HIDDEN, zIndex: k === 0 ? 2 : 1 }))
  }, [])

  // autoplay: a progress bar that, when full, moves to the next slide
  useEffect(() => {
    if (tw.current) tw.current.kill()
    tw.current = gsap.fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, duration: 6, ease: 'none', onComplete: () => go(cur.current + 1) })
    tw.current.paused(pausedRef.current)
    return () => { if (tw.current) tw.current.kill() }
  }, [i, go])

  useEffect(() => {
    const t = gsap.fromTo(root.current.querySelectorAll('.sl-info > *'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: 'power3.out' })
    return () => t.kill()
  }, [i])

  const toggle = () => { pausedRef.current = !pausedRef.current; setPaused(pausedRef.current); if (tw.current) tw.current.paused(pausedRef.current) }
  const p = projects[i]
  return (
    <section className="work" id="work">
      <div className="work-head wrap">
        <Split text="Selected work" />
        <Link className="ul-link rv" to="/project">All {N} projects <Arrow /></Link>
      </div>
      <div className="slider" ref={root}>
        {projects.map((q, k) => (
          <div className="slide" key={q.slug} ref={el => { slides.current[k] = el }}>
            <Img {...pic(q.cover, `${q.title} — sample project image`)} eager />
          </div>
        ))}
        <div className="sl-shade" />
        <Link className="sl-hit" to={`/project/${p.slug}`} data-cursor="View" aria-label={`View project: ${p.title}`} />
        <div className="sl-ui">
          <div className="sl-count">{pad(i + 1)} / {pad(N)}</div>
          <div className="sl-bottom">
            <div className="sl-info">
              <h3>{p.title}</h3>
              <p>{p.place}, {p.year} · {p.type}</p>
              <Link className="ul-link" to={`/project/${p.slug}`}>See work <Arrow /></Link>
            </div>
            <div className="sl-ctrl">
              <button onClick={toggle} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? 'Play' : 'Pause'}</button>
              {[1, 2].map(o => {
                const q = projects[(i + o) % N]; return (
                  <button key={o} className="sl-thumb" onClick={() => go(i + o)} aria-label={`Show ${q.title}`}><Img {...pic(q.cover, '')} eager /></button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="sl-bar"><i ref={bar} /></div>
      </div>
    </section>
  )
}

/* ═════════ 5. PROCESS ═════════ */
const processText = ['A brief is a promise. We keep it in the details: the weight of a headline, the line where design meets code, and the hour the first customer arrives.']

function Process() {
  return (
    <section className="proc wrap">
      <span className="lbl rv">Process</span>
      <ScrubText as="h2" parts={processText} className="proc-t" />
      <div className="proc-grid">
        <figure className="pf pf-a" data-speed="0.5">
          <div className="pf-img wipe" data-zoom><Img {...pic('studio-drafting')} /></div>
          <figcaption className="rv"><h3>Specs, checked by hand.</h3><p>Every spec is walked through with the team before build. We test against the design, follow the order things go live and sign off each stage before the next one starts — so what ships is what was agreed.</p></figcaption>
        </figure>
        <figure className="pf pf-b" data-speed="-0.35">
          <div className="pf-img wipe" data-zoom><Img {...pic('library-brick-detail')} /></div>
          <figcaption className="rv"><h3>Every detail tested before it goes live.</h3></figcaption>
        </figure>
      </div>
    </section>
  )
}

/* ═════════ 6. STATS — "Since 2018" ═════════ */
const stats = [[140, '+', 'Projects launched'], [62, '', 'Brands grown'], [24, '', 'People in the studio'], [9, '', 'Awards and nominations']]

function Stats() {
  return (
    <section className="stats">
      <div className="stats-bg" data-zoom><Img {...pic('fjordhus-waterfront', '')} /></div>
      <div className="stats-in wrap">
        <Split text={`Since ${site.year}`} className="stats-h" />
        <p className="rv lead">Years of work, counted. Every figure covers launched and in-progress projects together (dummy numbers).</p>
        <dl className="stat-grid">
          {stats.map(([n, s, l]) => (
            <div className="rv" key={l}><dt>{l}</dt><dd><Counter to={n} suffix={s} /></dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ═════════ 7. LIFE — pinned horizontal gallery ═════════ */
const life = ['life-window', 'life-gallery', 'saltvaerket-commons', 'life-courtyard', 'life-balcony', 'school-corridor', 'life-entrance']

function Life() {
  const root = useRef(null)
  const track = useRef(null)
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 801px)', () => {
      const dist = () => track.current.scrollWidth - window.innerWidth + 40
      const slide = gsap.to(track.current, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } })
      // each photo drifts inside its frame while it travels across the screen
      gsap.utils.toArray('.life-i').forEach(el => {
        const im = el.querySelector('img')
        if (!im) return
        gsap.fromTo(im, { xPercent: -8, scale: 1.3 }, { xPercent: 8, scale: 1.3, ease: 'none', scrollTrigger: { trigger: el, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true } })
      })
    })
    return () => mm.revert()
  }, [])
  return (
    <section className="life" ref={root}>
      <div className="life-head wrap">
        <Split text="Launch is a beginning, not the finish" />
        <div className="life-side">
          <p className="rv lead">We check in 90 days after every launch to see how things are really performing, and bring what we learn to the next project.</p>
          <Link className="ul-link rv" to="/studio">How we work <Arrow /></Link>
        </div>
      </div>
      <div className="life-track" ref={track} data-lenis-prevent-touch>
        {life.map((key, k) => <div className={`life-i li${k % 3}`} key={key}><Img {...pic(key)} /></div>)}
      </div>
    </section>
  )
}

/* ═════════ 8. WHERE WE WORK ═════════ */
const places = [
  ['Ahmedabad', 'The studio', 0], ['Vadodara', '1 h 40 by road', 2], ['Surat', '3 h by road', 3],
  ['Mumbai', '7 h by train', 1], ['Pune', '9 h by train', 4], ['Remote', 'Any time zone', 5],
]

function Places() {
  const [h, setH] = useState(-1)
  const root = useRef(null)
  const prev = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    gsap.set(prev.current, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(prev.current, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(prev.current, 'y', { duration: 0.5, ease: 'power3' })
    const move = e => { xTo(e.clientX); yTo(e.clientY) }
    const el = root.current
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])
  return (
    <section className="places wrap" ref={root}>
      <div className="svc-head">
        <Split text="Where we work" />
        <p className="rv lead">Most of our clients are within a day’s travel, so we can be in the room when it matters — and everyone else is a video call away.</p>
      </div>
      <ol className="loc">
        {places.map(([city, d, pi], k) => (
          <li key={city} className="rv">
            <Link to={`/project/${projects[pi].slug}`} className="loc-row" onPointerEnter={() => setH(k)} onPointerLeave={() => setH(-1)}>
              <span className="loc-n">{pad(k + 1)}</span>
              <span className="loc-city"><span>{city}</span><span aria-hidden="true">{city}</span></span>
              <span className="loc-d">{d}</span>
              <span className="loc-p">{projects[pi].title} <Arrow /></span>
            </Link>
          </li>
        ))}
      </ol>
      <div className={`loc-prev ${h >= 0 ? 'on' : ''}`} ref={prev} aria-hidden="true">
        {places.map(([c, , pi], k) => <div key={c} className={`lp ${h === k ? 'on' : ''}`}><Img {...pic(projects[pi].cover, '')} /></div>)}
      </div>
    </section>
  )
}

/* ═════════ 9. CTA ═════════ */
function CTA() {
  return (
    <section className="cta">
      <div className="cta-bg" data-zoom><Img {...pic('kyst-dusk', '')} /></div>
      <div className="cta-ov" />
      {SHOW_3D && <Scene3D variant="orbs" />}
      <div className="cta-in wrap">
        <Split text="Have a brief? Let’s talk." className="cta-h" />
        <div className="cta-row rv">
          <Magnetic strength={0.4}><Link className="cta-btn" to="/contact" data-cursor="Go">Start a project <Arrow size={22} /></Link></Magnetic>
          <div className="cta-links"><a className="ul-link" href={`mailto:${site.email}`}>{site.email}</a><span>{site.phone}</span></div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const ref = useReveals()
  useEffect(() => { document.title = `${site.name} — Digital studio` }, [])
  return (
    <div ref={ref}>
      <Hero />
      <Statement />
      <Services />
      <WorkSlider />
      <Process />
      <Stats />
      <Life />
      {/* <Places /> */}
      <CTA />
    </div>
  )
}



// HOME PAGE — every section lives in this one file (styles: ../styles/home.css)
// import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { gsap, ScrollTrigger, getLenis } from '../lib/scroll'
// import { useReveals } from '../lib/reveal'
// import { pic } from '../lib/images'
// import Scene3D from '../components/Scene3D'
// import Split, { ScrubText } from '../components/Split'
// import Img from '../components/Img'
// import Arrow from '../components/Arrow'
// import Counter from '../components/Counter'
// import Magnetic from '../components/Magnetic'
// import { projects } from '../data/projects'
// import { site } from '../data/site'
// import '../styles/home.css'

// const pad = n => String(n).padStart(2, '0')
// // The reference site uses photography only. Flip to true to bring the Three.js scenes back (hero + CTA).
// const SHOW_3D = false

// /* ═════════ 1. HERO — full-bleed photo, zoom-out intro, parallax, masked headline ═════════ */
// const heroLines = [['Digital', 'work', 'for'], ['everyday', 'growth.']]

// function Hero() {
//   const ref = useRef(null)
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const delay = Math.max(0.3, 1.9 - performance.now() / 1000)
//       gsap.timeline({ delay, defaults: { ease: 'power4.out' } })
//         .fromTo('.hero-bg', { scale: 1.35 }, { scale: 1, duration: 2.6, ease: 'power3.out' }, 0)
//         .from('.hero-veil', { opacity: 0, duration: 1.6, ease: 'none' }, 0)
//         .from('.hero h1 .wi', { yPercent: 120, rotate: 4, duration: 1.3, stagger: 0.09 }, 0.5)
//         .from('.hero-sub > *', { y: 30, opacity: 0, duration: 1, stagger: 0.12 }, 1.2)
//         .from('.hero-foot', { opacity: 0, duration: 1 }, 1.6)
//       // scroll: photo drifts slower than the page, copy lifts and fades
//       gsap.to('.hero-bg', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
//       gsap.to('.hero-copy', { yPercent: -16, opacity: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: '75% top', scrub: true } })
//     }, ref)
//     return () => ctx.revert()
//   }, [])
//   return (
//     <section className="hero" ref={ref}>
//       <div className="hero-bg"><Img {...pic('hero-facade')} eager /></div>
//       <div className="hero-veil" />
//       {SHOW_3D && <div className="hero-3d"><Scene3D variant="city" /></div>}
//       <div className="hero-copy">
//         <h1 aria-label="Digital work for everyday growth.">
//           {heroLines.map((line, li) => (
//             <span className="line" key={li} aria-hidden="true">
//               {line.map(w => (
//                 <Fragment key={w}>
//                   <span className="w"><span className={`wi ${w === 'everyday' ? 'serif' : ''}`}>{w}</span></span>{' '}
//                 </Fragment>
//               ))}
//             </span>
//           ))}
//         </h1>
//         <div className="hero-sub">
//           <p>Brands, websites and campaigns designed around the people who use them — and built to keep working long after launch.</p>
//           <Link className="ul-link" to="/work">See our work <Arrow /></Link>
//         </div>
//       </div>
//       <div className="hero-foot"><span>Scroll</span><i /></div>
//     </section>
//   )
// }

// /* ═════════ 2. STATEMENT ═════════ */
// const statement = [
//   'We make digital work people use every day:',
//   { img: 'material-brick' }, 'websites that sell, brands that stick,',
//   { img: 'studio-model-white' }, 'and campaigns built to outlast the trend.',
// ]

// function Statement() {
//   return (
//     <section className="stmt wrap">
//       <ScrubText as="h2" parts={statement} className="stmt-t" />
//       <p className="rv"><Link className="ul-link" to="/studio">About the studio <Arrow /></Link></p>
//     </section>
//   )
// }

// /* ═════════ 3. SERVICES — "Every stage, in house" ═════════ */
// const groups = [
//   { label: 'Create', items: [
//     { t: 'Brand & identity', d: 'Strategy, naming, logos and guidelines that make a business instantly recognisable.', img: 'library-cover' },
//     { t: 'Websites & apps', d: 'Fast, accessible, conversion-minded sites designed and built by one team.', img: 'stone-corner' },
//     { t: 'Content & social', d: 'Platform-native content and community care that earns attention every week.', img: 'life-gallery' },
//     { t: 'Video & motion', d: 'Short films, reels and motion systems that make ideas easy to understand.', img: 'copper-house' },
//   ] },
//   { label: 'Grow', items: [
//     { t: 'Search (SEO)', d: 'Technical fixes, content and authority building that compound month after month.', img: 'studio-drafting' },
//     { t: 'Paid media', d: 'Google, Meta and YouTube campaigns planned around your margins and tested weekly.', img: 'school-corridor' },
//     { t: 'Analytics & CRO', d: 'Clear tracking and steady experiments that turn more visitors into customers.', img: 'library-brick-detail' },
//     { t: 'Lifecycle & email', d: 'Flows and campaigns that welcome, nurture and bring customers back.', img: 'studio-model-section' },
//   ] },
// ]

// // Desktop: the group pins to the screen and scrolling steps through its services one by one (01 → 02 → 03 → 04).
// // Clicking a service scrolls to its step. Mobile / tablet: plain tap-to-open accordion.
// function Group({ label, items }) {
//   const [a, setA] = useState(0)
//   const root = useRef(null)
//   const st = useRef(null)
//   const N = items.length

//   useLayoutEffect(() => {
//     const mm = gsap.matchMedia()
//     mm.add('(min-width: 901px)', () => {
//       st.current = ScrollTrigger.create({
//         trigger: root.current, start: 'top 72px', end: () => '+=' + Math.round(N * window.innerHeight * 0.55),
//         pin: true, invalidateOnRefresh: true,
//         onUpdate: self => setA(Math.min(N - 1, Math.floor(self.progress * N))),
//       })
//       return () => { st.current = null }
//     })
//     return () => mm.revert()
//   }, [N])

//   const pick = k => {
//     const s = st.current
//     if (!s) return setA(k)
//     const y = s.start + ((k + 0.5) / N) * (s.end - s.start)
//     const L = getLenis()
//     if (L) L.scrollTo(y, { duration: 1.2 }); else window.scrollTo({ top: y })
//   }

//   return (
//     <div className="sg" ref={root}>
//       <div className="sg-list rv">
//         <h3 className="sg-label">{label}</h3>
//         {items.map((it, i) => (
//           <div key={it.t} className={`sg-item ${a === i ? 'on' : ''}`}>
//             <button className="sg-btn" aria-expanded={a === i} onClick={() => pick(i)}>
//               <span>{pad(i + 1)}</span><h4>{it.t}</h4>
//             </button>
//             <div className="sg-desc"><p>{it.d}</p></div>
//           </div>
//         ))}
//       </div>
//       <div className="sg-media rv">
//         {items.map((it, i) => <div key={it.t} className={`sg-img ${a === i ? 'on' : ''}`}><Img {...pic(it.img, '')} /></div>)}
//       </div>
//     </div>
//   )
// }

// function Services() {
//   return (
//     <section className="svc wrap">
//       <div className="svc-head">
//         <Split text="Every stage, in house" />
//         <p className="rv lead">From the first workshop to the year after launch, one team carries the project — so nothing is lost between idea and result.</p>
//       </div>
//       {groups.map(g => <Group key={g.label} {...g} />)}
//     </section>
//   )
// }

// /* ═════════ 4. SELECTED WORK — full-screen slider ═════════ */
// const HIDDEN = 'inset(0% 0% 0% 100%)', SHOWN = 'inset(0% 0% 0% 0%)'

// function WorkSlider() {
//   const N = projects.length
//   const [i, setI] = useState(0)
//   const [paused, setPaused] = useState(false)
//   const root = useRef(null)
//   const slides = useRef([])
//   const bar = useRef(null)
//   const cur = useRef(0)
//   const tw = useRef(null)
//   const pausedRef = useRef(false)
//   const busy = useRef(false) // ignore clicks while a wipe is running, so slides never get stuck half-revealed

//   const go = useCallback(n => {
//     n = (n + N) % N
//     if (n === cur.current || busy.current) return
//     busy.current = true
//     const out = slides.current[cur.current], inn = slides.current[n]
//     slides.current.forEach(s => { if (s !== out && s !== inn) gsap.set(s, { clipPath: HIDDEN, zIndex: 1 }) })
//     gsap.set(out, { clipPath: SHOWN, zIndex: 2 })
//     gsap.set(inn, { clipPath: HIDDEN, zIndex: 3 })
//     gsap.to(inn, { clipPath: SHOWN, duration: 1.1, ease: 'power4.inOut', onComplete: () => { gsap.set(out, { clipPath: HIDDEN, zIndex: 1 }); busy.current = false } })
//     const im = inn.querySelector('img')
//     if (im) gsap.fromTo(im, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: 'power3.out' })
//     cur.current = n
//     setI(n)
//   }, [N])

//   useLayoutEffect(() => {
//     slides.current.forEach((s, k) => gsap.set(s, { clipPath: k === 0 ? SHOWN : HIDDEN, zIndex: k === 0 ? 2 : 1 }))
//   }, [])

//   // autoplay: a progress bar that, when full, moves to the next slide
//   useEffect(() => {
//     if (tw.current) tw.current.kill()
//     tw.current = gsap.fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, duration: 6, ease: 'none', onComplete: () => go(cur.current + 1) })
//     tw.current.paused(pausedRef.current)
//     return () => { if (tw.current) tw.current.kill() }
//   }, [i, go])

//   useEffect(() => {
//     const t = gsap.fromTo(root.current.querySelectorAll('.sl-info > *'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: 'power3.out' })
//     return () => t.kill()
//   }, [i])

//   const toggle = () => { pausedRef.current = !pausedRef.current; setPaused(pausedRef.current); if (tw.current) tw.current.paused(pausedRef.current) }
//   const p = projects[i]
//   return (
//     <section className="work" id="work">
//       <div className="work-head wrap">
//         <Split text="Selected work" />
//         <Link className="ul-link rv" to="/project">All {N} projects <Arrow /></Link>
//       </div>
//       <div className="slider" ref={root}>
//         {projects.map((q, k) => (
//           <div className="slide" key={q.slug} ref={el => { slides.current[k] = el }}>
//             <Img {...pic(q.cover, `${q.title} — sample project image`)} eager />
//           </div>
//         ))}
//         <div className="sl-shade" />
//         <Link className="sl-hit" to={`/project/${p.slug}`} data-cursor="View" aria-label={`View project: ${p.title}`} />
//         <div className="sl-ui">
//           <div className="sl-count">{pad(i + 1)} / {pad(N)}</div>
//           <div className="sl-bottom">
//             <div className="sl-info">
//               <h3>{p.title}</h3>
//               <p>{p.place}, {p.year} · {p.type}</p>
//               <Link className="ul-link" to={`/project/${p.slug}`}>See work <Arrow /></Link>
//             </div>
//             <div className="sl-ctrl">
//               <button onClick={toggle} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? 'Play' : 'Pause'}</button>
//               {[1, 2].map(o => { const q = projects[(i + o) % N]; return (
//                 <button key={o} className="sl-thumb" onClick={() => go(i + o)} aria-label={`Show ${q.title}`}><Img {...pic(q.cover, '')} eager /></button>
//               ) })}
//             </div>
//           </div>
//         </div>
//         <div className="sl-bar"><i ref={bar} /></div>
//       </div>
//     </section>
//   )
// }

// /* ═════════ 5. PROCESS ═════════ */
// const processText = ['A brief is a promise. We keep it in the details: the weight of a headline, the line where design meets code, and the hour the first customer arrives.']

// function Process() {
//   return (
//     <section className="proc wrap">
//       <span className="lbl rv">Process</span>
//       <ScrubText as="h2" parts={processText} className="proc-t" />
//       <div className="proc-grid">
//         <figure className="pf pf-a" data-speed="0.5">
//           <div className="pf-img wipe" data-zoom><Img {...pic('studio-drafting')} /></div>
//           <figcaption className="rv"><h3>Specs, checked by hand.</h3><p>Every spec is walked through with the team before build. We test against the design, follow the order things go live and sign off each stage before the next one starts — so what ships is what was agreed.</p></figcaption>
//         </figure>
//         <figure className="pf pf-b" data-speed="-0.35">
//           <div className="pf-img wipe" data-zoom><Img {...pic('library-brick-detail')} /></div>
//           <figcaption className="rv"><h3>Every detail tested before it goes live.</h3></figcaption>
//         </figure>
//       </div>
//     </section>
//   )
// }

// /* ═════════ 6. STATS — "Since 2018" ═════════ */
// const stats = [[140, '+', 'Projects launched'], [62, '', 'Brands grown'], [24, '', 'People in the studio'], [9, '', 'Awards and nominations']]

// function Stats() {
//   return (
//     <section className="stats">
//       <div className="stats-bg" data-zoom><Img {...pic('fjordhus-waterfront', '')} /></div>
//       <div className="stats-in wrap">
//         <Split text={`Since ${site.year}`} className="stats-h" />
//         <p className="rv lead">Years of work, counted. Every figure covers launched and in-progress projects together (dummy numbers).</p>
//         <dl className="stat-grid">
//           {stats.map(([n, s, l]) => (
//             <div className="rv" key={l}><dt>{l}</dt><dd><Counter to={n} suffix={s} /></dd></div>
//           ))}
//         </dl>
//       </div>
//     </section>
//   )
// }

// /* ═════════ 7. LIFE — pinned horizontal gallery ═════════ */
// const life = ['life-window', 'life-gallery', 'saltvaerket-commons', 'life-courtyard', 'life-balcony', 'school-corridor', 'life-entrance']

// function Life() {
//   const root = useRef(null)
//   const track = useRef(null)
//   useLayoutEffect(() => {
//     const mm = gsap.matchMedia()
//     mm.add('(min-width: 801px)', () => {
//       const dist = () => track.current.scrollWidth - window.innerWidth + 40
//       const slide = gsap.to(track.current, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } })
//       // each photo drifts inside its frame while it travels across the screen
//       gsap.utils.toArray('.life-i').forEach(el => {
//         const im = el.querySelector('img')
//         if (!im) return
//         gsap.fromTo(im, { xPercent: -8, scale: 1.3 }, { xPercent: 8, scale: 1.3, ease: 'none', scrollTrigger: { trigger: el, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true } })
//       })
//     })
//     return () => mm.revert()
//   }, [])
//   return (
//     <section className="life" ref={root}>
//       <div className="life-head wrap">
//         <Split text="Launch is a beginning, not the finish" />
//         <div className="life-side">
//           <p className="rv lead">We check in 90 days after every launch to see how things are really performing, and bring what we learn to the next project.</p>
//           <Link className="ul-link rv" to="/studio">How we work <Arrow /></Link>
//         </div>
//       </div>
//       <div className="life-track" ref={track} data-lenis-prevent-touch>
//         {life.map((key, k) => <div className={`life-i li${k % 3}`} key={key}><Img {...pic(key)} /></div>)}
//       </div>
//     </section>
//   )
// }

// /* ═════════ 8. WHERE WE WORK ═════════ */
// const places = [
//   ['Ahmedabad', 'The studio', 0], ['Vadodara', '1 h 40 by road', 2], ['Surat', '3 h by road', 3],
//   ['Mumbai', '7 h by train', 1], ['Pune', '9 h by train', 4], ['Remote', 'Any time zone', 5],
// ]

// function Places() {
//   const [h, setH] = useState(-1)
//   const root = useRef(null)
//   const prev = useRef(null)
//   useEffect(() => {
//     if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
//     gsap.set(prev.current, { xPercent: -50, yPercent: -50 })
//     const xTo = gsap.quickTo(prev.current, 'x', { duration: 0.5, ease: 'power3' })
//     const yTo = gsap.quickTo(prev.current, 'y', { duration: 0.5, ease: 'power3' })
//     const move = e => { xTo(e.clientX); yTo(e.clientY) }
//     const el = root.current
//     el.addEventListener('pointermove', move)
//     return () => el.removeEventListener('pointermove', move)
//   }, [])
//   return (
//     <section className="places wrap" ref={root}>
//       <div className="svc-head">
//         <Split text="Where we work" />
//         <p className="rv lead">Most of our clients are within a day’s travel, so we can be in the room when it matters — and everyone else is a video call away.</p>
//       </div>
//       <ol className="loc">
//         {places.map(([city, d, pi], k) => (
//           <li key={city} className="rv">
//             <Link to={`/work/${projects[pi].slug}`} className="loc-row" onPointerEnter={() => setH(k)} onPointerLeave={() => setH(-1)}>
//               <span className="loc-n">{pad(k + 1)}</span>
//               <span className="loc-city"><span>{city}</span><span aria-hidden="true">{city}</span></span>
//               <span className="loc-d">{d}</span>
//               <span className="loc-p">{projects[pi].title} <Arrow /></span>
//             </Link>
//           </li>
//         ))}
//       </ol>
//       <div className={`loc-prev ${h >= 0 ? 'on' : ''}`} ref={prev} aria-hidden="true">
//         {places.map(([c, , pi], k) => <div key={c} className={`lp ${h === k ? 'on' : ''}`}><Img {...pic(projects[pi].cover, '')} /></div>)}
//       </div>
//     </section>
//   )
// }

// /* ═════════ 9. CTA ═════════ */
// function CTA() {
//   return (
//     <section className="cta">
//       <div className="cta-bg" data-zoom><Img {...pic('kyst-dusk', '')} /></div>
//       <div className="cta-ov" />
//       {SHOW_3D && <Scene3D variant="orbs" />}
//       <div className="cta-in wrap">
//         <Split text="Have a brief? Let’s talk." className="cta-h" />
//         <div className="cta-row rv">
//           <Magnetic strength={0.4}><Link className="cta-btn" to="/contact" data-cursor="Go">Start a project <Arrow size={22} /></Link></Magnetic>
//           <div className="cta-links"><a className="ul-link" href={`mailto:${site.email}`}>{site.email}</a><span>{site.phone}</span></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function Home() {
//   const ref = useReveals()
//   useEffect(() => { document.title = `${site.name} — Digital studio` }, [])
//   return (
//     <div ref={ref}>
//       <Hero />
//       <Statement />
//       <Services />
//       <WorkSlider />
//       <Process />
//       <Stats />
//       <Life />
//       {/* <Places /> */}
//       <CTA />
//     </div>
//   )
// }


