
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../lib/scroll'
import { useReveals } from '../lib/reveal'
import { pic } from '../lib/images'
import Split from '../components/Split'
import Img from '../components/Img'
import Arrow from '../components/Arrow'
import { projects } from '../data/projects'
import { site } from '../data/site'
import '../styles/work.css'

const cats = ['All', 'Brand', 'Web', 'Marketing']

export default function Work() {
  const root = useReveals()
  const [f, setF] = useState('All')
  const grid = useRef(null)
  const list = f === 'All' ? projects : projects.filter(p => p.cat === f)
  useEffect(() => { document.title = `Project — ${site.name}` }, [])
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wc', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' })
    }, grid)
    return () => ctx.revert()
  }, [f])
  return (
    <div ref={root} className="page">
      <section className="pg-head wrap">
        <span className="lbl rv">Work ({String(projects.length).padStart(2, '0')})</span>
        <Split text="Selected projects" as="h1" className="pg-h" />
       
        <div className="chips rv" role="tablist" aria-label="Filter projects">
          {cats.map(c => <button key={c} role="tab" aria-selected={f === c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}
        </div>
      </section>
      <section className="wg wrap" ref={grid}>
        {list.map((p, k) => (
          <Link key={p.slug} to={`/project/${p.slug}`} className={`wc ${k % 3 === 0 ? 'wide' : ''}`} data-cursor="View">
            <div className="wc-img"><Img {...pic(p.cover, `${p.title} — sample project image`)} /></div>
            <div className="wc-meta"><h3>{p.title}</h3><span>{p.type} · {p.year}</span><Arrow /></div>
          </Link>
        ))}
      </section>
    </div>
  )
}
