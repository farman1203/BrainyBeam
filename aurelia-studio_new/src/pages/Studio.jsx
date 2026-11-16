// STUDIO (ABOUT) PAGE (styles: ../styles/studio.css)
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveals } from '../lib/reveal'
import { pic } from '../lib/images'
import Split, { ScrubText } from '../components/Split'
import Img from '../components/Img'
import Arrow from '../components/Arrow'
import { site } from '../data/site'
import '../styles/studio.css'

const intro = [`${site.name} is a creative marketing agency in ${site.city} that helps brands grow, connect and stand out in the digital world. We bring strategy, content and performance under one roof, so every idea is built to deliver measurable success.`]
const values = [
  ['Creative thinking', 'Ideas that inspire and make an impact.'],
  ['Result driven', 'Strategies focused on measurable growth.'],
  ['Client focused', 'Your success is our priority.'],
]
const team = [['Aaqib', 'Founder']]
const steps = [
  ['01', 'Discover', 'We learn your brand, your audience and your goals before anything is made.'],
  ['02', 'Plan', 'Strategy, content and channels, agreed together and mapped out clearly.'],
  ['03', 'Create', 'Shoots, edits, design and copy, made with care and in step with the plan.'],
  ['04', 'Grow', 'We publish, advertise and report, then keep improving what works.'],
]

export default function Studio() {
  const root = useReveals()
  useEffect(() => { document.title = `Studio — ${site.name}` }, [])
  return (
    <div ref={root} className="page">
      <section className="pg-head wrap">
        <span className="lbl rv">Studio</span>
        <Split text="Marketing with impact." as="h1" className="pg-h" />
      </section>
      <section className="st-hero wipe" data-zoom><Img {...pic('labanista-reel')} pos="50% 50%" eager /></section>
      <section className="st-intro wrap"><ScrubText as="h2" parts={intro} className="stmt-t" /></section>
      <section className="st-vals wrap">
        {values.map(([t, d], i) => <div className="rv" key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>)}
      </section>
      <section className="st-team wrap">
        <Split text="The people" />
        <ul className="tg">
          {team.map(([n, r]) => <li className="tm rv" key={n}><strong>{n}</strong><span>{r}</span></li>)}
        </ul>
        <p className="rv st-join">Want to join the team? <a className="ul-link" href={`mailto:${site.email}`}>{site.email}</a></p>
      </section>
      <section className="st-time wrap">
        <Split text="How we work" />
        <ol>{steps.map(([n, t, d]) => <li className="rv" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
        <p className="rv"><Link className="ul-link big" to="/contact">Start a project <Arrow /></Link></p>
      </section>
    </div>
  )
}
