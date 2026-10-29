import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Scroll to explore" title="Projects" />
        <div className="prj-list">
          {projects.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: i * 0.05 }}>
              <Link to={`/projects/${p.slug}`} className="prj">
                <span className="prj-n">0{i + 1}</span>
                <span className="prj-t"><strong>{p.cat}</strong><small>{p.sub}</small></span>
                <span className="prj-thumb art" style={{ '--h': p.hue }}><p.icon size={34} strokeWidth={1.4} /></span>
                <span className="prj-cta">VIEW PROJECT <ArrowUpRight size={16} /></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="center"><Button to="/projects">View All Projects</Button></div>
      </div>
    </section>
  )
}
