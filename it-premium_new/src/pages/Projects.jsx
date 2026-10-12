
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers3, Sparkles } from 'lucide-react';
import { projects } from '../data/siteData';
import Reveal from '../components/Reveal';

const projectTypes = ['FINTECH', 'E-COMMERCE', 'HEALTHCARE'];

function Projects() {
  return (
    <main className="projects-page">
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">OUR PROJECTS</span>
            <h1>Ideas turned into <em>impact.</em></h1>
            <p>
              A closer look at digital experiences built to solve real problems,
              support ambitious teams and create meaningful results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section projects-page-section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="kicker">SELECTED WORK</span>
                <h2>Thoughtful work. <em>Real possibilities.</em></h2>
              </div>
              <span className="projects-count">
                <Layers3 size={17} /> {String(projects.length).padStart(2, '0')} PROJECTS
              </span>
            </div>
          </Reveal>

          <div className="project-list projects-page-list">
            {projects.map((project, index) => (
              <Reveal
                key={project[0]}
                delay={index * 0.08}
                direction={index % 2 ? 'right' : 'left'}
              >
                <article className="project">
                  <div className={`project-art art-${index % 3}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div className="project-shape" />
                    <div className="project-art-label">
                      <Sparkles size={16} />
                      <span>ORBIT LABS / PROJECT</span>
                    </div>
                  </div>

                  <div className="project-copy">
                    <span>
                      CASE STUDY / {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{project[0]}</h3>
                    <p>{project[1]}</p>

                    <div className="project-tags">
                      <span>{projectTypes[index % projectTypes.length]}</span>
                      <span>PRODUCT ENGINEERING</span>
                    </div>

                    <Link to="/contact" className='text-secondary'>
                      Discuss a similar project <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-cta-section">
        <div className="container cta">
          <Reveal>
            <span className="kicker">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something <em>meaningful.</em></h2>
            <p>
              Have an idea you want to bring to life? Let's talk about your
              goals and find the right way to build it.
            </p>
            <Link className="btn primary" to="/contact">
              Start a project <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Projects;
