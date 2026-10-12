import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Target,
  HeartHandshake,
  Lightbulb,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Server,
  Layers,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { technologyGroups } from '../data/siteData';

const values = [
  {
    icon: Target,
    number: '01',
    title: 'Purpose before pixels',
    text: 'We start by understanding the problem, the people and the outcome that matters.',
  },
  {
    icon: HeartHandshake,
    number: '02',
    title: 'Partnership over process',
    text: 'Clear communication and collaboration keep every project moving in the right direction.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Curiosity drives progress',
    text: 'We keep learning, testing ideas and finding better ways to solve difficult problems.',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Craft in every detail',
    text: 'From the first interaction to the underlying code, quality is part of the whole experience.',
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">ABOUT ORBIT LABS</span>
            <h1>Technology, but <em>human.</em></h1>
            <p>
              We are a modern technology partner for ambitious teams. We bring
              strategy, design and engineering together to create digital
              experiences that move businesses forward.
            </p>
            <div className="about-hero-actions">
              <Link className="btn primary" to="/contact">
                Let's work together <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" to="/services">
                Explore our services <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <Reveal direction="left">
            <div>
              <span className="kicker">WHO WE ARE</span>
              <h2>Good technology starts with <em>understanding.</em></h2>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="about-intro-copy">
              <p>
                At Orbit Labs, we believe technology works best when it makes
                life simpler. Our approach brings thoughtful design, practical
                engineering and business goals together from the very beginning.
              </p>
              <p>
                Whether it is a new digital product or an existing platform
                ready to grow, we focus on building solutions that are useful,
                reliable and ready for what comes next.
              </p>
              <div className="about-stat-row">
                <div>
                  <strong>40+</strong>
                  <span>Products shipped</span>
                </div>
                <div>
                  <strong>8 yrs</strong>
                  <span>Engineering craft</span>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Client retention</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark-section about-values">
        <div className="container">
          <Reveal>
            <div className="section-head light">
              <div>
                <span className="kicker">WHAT GUIDES US</span>
                <h2>Our values shape <em>our work.</em></h2>
              </div>
              <p className="about-values-intro">
                The principles behind how we think, build and work together.
              </p>
            </div>
          </Reveal>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.number} delay={index * 0.07}>
                  <article className="about-value-card">
                    <div className="about-value-top">
                      <span>{value.number}</span>
                      <Icon size={23} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      <section className="section technology-section">
        <div className="container">
          <Reveal>
            <div className="technology-heading">
              <span className="kicker">OUR TECHNOLOGY STACK</span>
              <h2>
                The right tools to build <em>what's next.</em>
              </h2>
              <p>
                We use modern, reliable technologies to create digital products
                that are scalable, secure and ready to grow with your business.
              </p>
            </div>
          </Reveal>

          <div className="technology-grid">
            {technologyGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <Reveal key={group.title} delay={index * 0.07}>
                  <article className="technology-card">
                    <div className="technology-card-top">
                      <div className="technology-icon">
                        <Icon size={23} />
                      </div>
                      <span className="technology-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3>{group.title}</h3>
                    <p>{group.description}</p>

                    <div className="technology-tags">
                      {group.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      <section className="section about-process">
        <div className="container about-process-grid">
          <Reveal direction="left">
            <div>
              <span className="kicker">HOW WE WORK</span>
              <h2>From first conversation to <em>launch.</em></h2>
              <p className="about-process-copy">
                Great outcomes come from a clear direction, close collaboration
                and continuous improvement.
              </p>
            </div>
          </Reveal>

          <div className="about-process-steps">
            {[
              ['01', 'Discover', 'Understand your goals, users and challenges.'],
              ['02', 'Design', 'Shape a clear, thoughtful digital experience.'],
              ['03', 'Build', 'Develop, test and refine the solution.'],
              ['04', 'Launch', 'Deliver, learn and improve over time.'],
            ].map(([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.07} direction="right">
                <div className="about-process-step">
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <Reveal>
            <span className="kicker">LET'S CONNECT</span>
            <h2>Have a challenge? <em>Let's solve it.</em></h2>
            <p>
              Tell us about your idea, your goals or the problem you are trying
              to solve. We'd love to hear from you.
            </p>
            <Link className="btn primary" to="/contact">
              Talk to our team <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default About;
