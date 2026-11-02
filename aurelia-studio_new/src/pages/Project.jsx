
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useReveals } from '../lib/reveal'
import { pic } from '../lib/images'
import Split from '../components/Split'
import Img from '../components/Img'
import Arrow from '../components/Arrow'
import NotFound from './NotFound'
import { projects } from '../data/projects'
import { site } from '../data/site'
import '../styles/work.css'

export default function Project() {
  const { slug } = useParams()
  const idx = projects.findIndex(p => p.slug === slug)
  const p = projects[idx]
  const next = projects[(idx + 1) % projects.length]
  const root = useReveals([slug])
  useEffect(() => { if (p) document.title = `${p.title} — ${site.name}` }, [p])
  if (!p) return <NotFound />
  return (
    <div ref={root} className="page" key={slug}>
      <section className="pj-head wrap">
        <span className="lbl rv">{p.type}</span>
        <Split text={p.title} as="h1" className="pg-h" />
        <dl className="pj-meta rv">
          <div><dt>Year</dt><dd>{p.year}</dd></div>
          <div><dt>Location</dt><dd>{p.place}</dd></div>
          <div><dt>Services</dt><dd>{p.services.join(', ')}</dd></div>
          <div><dt>Client</dt><dd>{p.title} (sample)</dd></div>
        </dl>
      </section>
      <div className="pj-hero wipe" data-zoom><Img {...pic(p.cover, `${p.title} — sample hero image`)} eager /></div>
      <section className="pj-body wrap">
        <p className="pj-lead rv">{p.intro}</p>
        <div className="pj-cols">
          {[['The challenge', p.challenge], ['What we did', p.approach], ['The result', p.result]].map(([t, d]) => (
            <div className="rv" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <dl className="pj-nums">
          {p.metrics.map(([v, l]) => <div className="rv" key={l}><dd>{v}</dd><dt>{l}</dt></div>)}
        </dl>
        <small className="rv note">Illustrative sample results — not a real client.</small>
      </section>
      <section className="pj-gal wrap">
        <div className="wipe" data-speed="0.3"><Img {...pic(p.gallery[0])} /></div>
        <div className="wipe" data-speed="-0.3"><Img {...pic(p.gallery[1])} /></div>
      </section>
      <Link to={`/project/${next.slug}`} className="pj-next" data-cursor="Next">
        <div className="pj-next-bg"><Img {...pic(next.cover, '')} /></div>
        <div className="wrap"><span className="lbl">Next project</span><h2>{next.title} <Arrow size={40} /></h2></div>
      </Link>
    </div>
  )
}
