import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../lib/scroll'
import { site } from '../data/site'

export default function Footer() {
  const ref = useRef(null)
  // columns fade up one after another, then the giant wordmark rises letter by letter
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ftr-tag, .ftr-cols > div', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.ftr-top', start: 'top 92%', once: true } })
      gsap.fromTo('.ftr-word i', { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.4, ease: 'power4.out', stagger: 0.07, scrollTrigger: { trigger: '.ftr-word', start: 'top 98%', once: true } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <footer className="ftr" ref={ref}>
      <div className="ftr-top">
        <p className="ftr-tag">{site.tagline}</p>
        <div className="ftr-cols">
          <div><h4>Contact</h4><a className="ul-link" href={`mailto:${site.email}`}>{site.email}</a><p>{site.phone}</p></div>
          <div><h4>Studio</h4><p>{site.address[0]}<br />{site.address[1]}</p></div>
          <div><h4>Index</h4><Link className="ul-link" to="/project">Work</Link><Link className="ul-link" to="/studio">Studio</Link><Link className="ul-link" to="/contact">Contact</Link></div>
          <div><h4>Elsewhere</h4><span className="ftr-soft"><a href='https://www.instagram.com/studio610.co/'>Instagram</a></span><span className="ftr-soft">LinkedIn</span></div>
        </div>
      </div>
      <div className="ftr-word" aria-hidden="true">{[...site.name].map((ch, k) => <i key={k}>{ch}</i>)}</div>
      <div className="ftr-bot"><span>© {new Date().getFullYear()} {site.name} Digital Studio</span></div>
    </footer>
  )
}
