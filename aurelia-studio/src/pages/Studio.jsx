
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveals } from '../lib/reveal'
import { pic } from '../lib/images'
import Split, { ScrubText } from '../components/Split'
import Img from '../components/Img'
import Arrow from '../components/Arrow'
import { site } from '../data/site'
import '../styles/studio.css'

const intro = ['We are a small, senior studio of strategists, designers, developers and marketers. We believe good digital work is quiet, careful and measurable — and that the best results come when everyone sits at the same table.']
const values = [
  ['Careful by default', 'We sweat the small things: copy, spacing, load time, tracking. They are where trust is won.'],
  ['Honest numbers', 'Plain-language reports, real figures and straight advice — even when the answer is “not yet”.'],
  ['One team', 'Strategy, design, build and growth under one roof, so nothing is lost between handoffs.'],
]
const team = [
  ['Aaqib', 'Founder'], ['Meera Patel', 'Creative Director'], ['Kabir Desai', 'Head of Performance'],
  ['Isha Trivedi', 'SEO & Content Lead'], ['Rohan Mehta', 'Lead Developer'], ['Anaya Joshi', 'Motion Designer'],
]
const timeline = [
  [2018, 'The first spark', 'Two people, one desk and a handful of local clients.'],
  [2020, 'Going full-service', 'SEO, performance and content joined design and development.'],
  [2022, 'A proper studio', 'A multi-disciplinary team and a process we could repeat.'],
  [2024, 'Data at the core', 'Dashboards and monthly reviews for every client.'],
  [2026, 'Scaling what works', 'Growing brands from first launch to long-term scale.'],
]

export default function Studio() {
  const root = useReveals()
  useEffect(() => { document.title = `Studio — ${site.name}` }, [])
  return (
    <div ref={root} className="page">
      <section className="pg-head wrap">
        <span className="lbl rv">Studio</span>
        <Split text="Digital work, drawn carefully." as="h1" className="pg-h" />
      </section>
      <section className="st-hero wipe" data-zoom><Img {...pic('studio-model-desk')} eager /></section>
      <section className="st-intro wrap"><ScrubText as="h2" parts={intro} className="stmt-t" /></section>
      <section className="st-vals wrap">
        {values.map(([t, d], i) => <div className="rv" key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>)}
      </section>
      <section className="st-team wrap">
        <Split text="The people" />
        <ul className="tg">
          {team.map(([n, r]) => <li className="tm rv" key={n}><strong>{n}</strong><span>{r}</span></li>)}
        </ul>
      </section>
      <section className="st-time wrap">
        <Split text="How we got here" />
        <ol>{timeline.map(([y, t, d]) => <li className="rv" key={y}><b>{y}</b><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
        <p className="rv"><Link className="ul-link big" to="/contact">Start a project <Arrow /></Link></p>
      </section>
    </div>
  )
}
