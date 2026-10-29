import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import StackCard from '../components/StackCard'
import Button from '../components/Button'
import { services } from '../data/services'

const featured = services.slice(0, 4)

export default function Services() {
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
