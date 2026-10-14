import { Layers3 } from 'lucide-react';
import { projects } from '@/data/siteData';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CtaSection from '../components/CtaSection';

function Projects() {
  return (
    <main id="main" className="projects-page">
      <title>Projects | Orbit Labs</title>

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
          <SectionHeading
            kicker="SELECTED WORK"
            title={<>Thoughtful work. <em>Real possibilities.</em></>}
          >
            <span className="projects-count">
              <Layers3 size={17} aria-hidden="true" /> {String(projects.length).padStart(2, '0')} PROJECTS
            </span>
          </SectionHeading>

          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.05}>
                <ProjectCard
                  project={project}
                  index={index}
                  tone="light"
                  showLabel
                  cta={{ to: '/contact', label: 'Discuss a similar project' }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        kicker="HAVE A PROJECT IN MIND?"
        title={<>Let's build something <em>meaningful.</em></>}
        text="Have an idea you want to bring to life? Let's talk about your goals and find the right way to build it."
      />
    </main>
  );
}

export default Projects;
