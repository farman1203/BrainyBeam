import { Link } from 'react-router-dom';
import { m } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, projects, stats } from '@/data/siteData';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import ProjectCard from '../components/ProjectCard';
import TechnologySection from '../components/TechnologySection';
import CtaSection from '../components/CtaSection';

const EASE = [0.22, 1, 0.36, 1];

// One orchestrated entrance for the hero: children rise in sequence.
const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const heroRise = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } } };

const tickerItems = ['WEB DEVELOPMENT', 'AI & AUTOMATION', 'CLOUD ENGINEERING', 'PRODUCT DESIGN'];

function Home() {
  return (
    <main id="main">
      <title>Orbit Labs | Digital products, engineered with intention</title>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-a" aria-hidden="true" />
        <div className="orb orb-b" aria-hidden="true" />

        <m.div className="container hero-inner" variants={heroStagger} initial="hidden" animate="show">
          <m.div className="eyebrow" variants={heroRise}>
            <span /> Technology, but human.
          </m.div>
          <m.h1 variants={heroRise}>
            We build digital products <em>people love.</em>
          </m.h1>
          <m.p className="hero-copy" variants={heroRise}>
            Orbit Labs is a modern technology partner for ambitious teams. We design, engineer and scale digital experiences that move businesses forward.
          </m.p>
          <m.div className="hero-actions" variants={heroRise}>
            <Button asChild size="lg">
              <Link to="/contact">
                Let’s build together <ArrowUpRight size={18} className="arrow-nudge" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="link" size="link">
              <a href="#work">
                Explore our work <ChevronRight size={17} aria-hidden="true" />
              </a>
            </Button>
          </m.div>
          <m.div className="hero-stats" variants={heroRise}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <b>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </b>
                <span>{stat.label}</span>
              </div>
            ))}
          </m.div>
        </m.div>

        {/* Decorative illustration: positioned by .hero-visual, animated by the inner card (no CSS/Motion transform clash). */}
        <div className="hero-visual" aria-hidden="true">
          <div className="container">
            <m.div
              className="hero-card"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            >
              <m.div
                className="hero-card-float"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 1.6 }}
              >
                <div className="card-glow" />
                <div className="mini-label">LIVE SYSTEM</div>
                <div className="pulse">
                  <i />
                  <span>All systems operational</span>
                </div>
                <div className="metric">
                  <span>Product velocity</span>
                  <b>+42%</b>
                </div>
                <div className="bars">
                  <i /><i /><i /><i /><i /><i /><i />
                </div>
                <div className="code-line">
                  <span>01</span> ship({`{`}ideas{`}`}) <strong>→</strong>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((group) => (
            <div className="ticker-group" key={group}>
              {tickerItems.map((item) => (
                <span key={item}>
                  {item}
                  <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            kicker="WHAT WE DO"
            title={<>Technology that creates <em>momentum.</em></>}
            action={{ to: '/services', label: 'View all services' }}
          />
          <ServicesGrid items={services.slice(0, 4)} />
        </div>
      </section>

      <section className="dark-section" id="work">
        <div className="container">
          <SectionHeading
            light
            kicker="SELECTED WORK"
            title={<>Small team. <em>Big outcomes.</em></>}
            action={{ to: '/contact', label: 'Start a conversation' }}
          />
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={0.05}>
                <ProjectCard project={project} index={i} tone="dark" cta={{ to: '/projects', label: 'View case study' }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechnologySection />

      <CtaSection
        kicker="HAVE AN IDEA?"
        title={<>Let’s make something <em>remarkable.</em></>}
        text="Tell us what you're building. We'll bring the right people, process and technology to make it real."
      />
    </main>
  );
}

export default Home;
