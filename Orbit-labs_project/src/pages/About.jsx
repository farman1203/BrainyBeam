import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, HeartHandshake, Lightbulb, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { stats, teamMembers } from '@/data/siteData';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import SectionHeading from '../components/SectionHeading';
import TechnologySection from '../components/TechnologySection';
import CtaSection from '../components/CtaSection';

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

const processSteps = [
  ['Discover', 'Understand your goals, users and challenges.'],
  ['Design', 'Shape a clear, thoughtful digital experience.'],
  ['Build', 'Develop, test and refine the solution.'],
  ['Launch', 'Deliver, learn and improve over time.'],
];

function initials(name) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
}

function About() {
  return (
    <main id="main" className="about-page">
      <title>About | Orbit Labs</title>

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
              <Button asChild size="lg">
                <Link to="/contact">
                  Let's work together <ArrowUpRight size={18} className="arrow-nudge" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="link" size="link">
                <Link to="/services">
                  Explore our services <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <Reveal>
            <div>
              <span className="kicker">WHO WE ARE</span>
              <h2>Good technology starts with <em>understanding.</em></h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark-section about-values">
        <div className="container">
          <SectionHeading
            light
            kicker="WHAT GUIDES US"
            title={<>Our values shape <em>our work.</em></>}
          >
            <p className="about-values-intro">
              The principles behind how we think, build and work together.
            </p>
          </SectionHeading>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.number} delay={index * 0.08}>
                  <Card asChild className="about-value-card card-lift">
                    <article>
                      <div className="about-value-top">
                        <span aria-hidden="true">{value.number}</span>
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </article>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <TechnologySection />

      <section className="section about-process">
        <div className="container about-process-grid">
          <Reveal>
            <div>
              <span className="kicker">HOW WE WORK</span>
              <h2>From first conversation to <em>launch.</em></h2>
              <p className="about-process-copy">
                Great outcomes come from a clear direction, close collaboration
                and continuous improvement.
              </p>
            </div>
          </Reveal>

          <ol className="about-process-steps">
            {processSteps.map(([title, description], index) => (
              <li key={title}>
                <Reveal delay={index * 0.07}>
                  <div className="about-process-step">
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {teamMembers.length > 0 && (
        <section className="section member-section">
          <div className="container">
            <SectionHeading kicker="MEET THE TEAM" title={<>The people behind <em>Orbit Labs.</em></>} />
            <div className="member-grid">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={(index % 4) * 0.07}>
                  <Card asChild className="member-card card-lift">
                    <article>
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} loading="lazy" decoding="async" />
                      ) : (
                        <div className="member-avatar" aria-hidden="true">{initials(member.name)}</div>
                      )}
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </article>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        kicker="LET'S CONNECT"
        title={<>Have a challenge? <em>Let's solve it.</em></>}
        text="Tell us about your idea, your goals or the problem you are trying to solve. We'd love to hear from you."
        label="Talk to our team"
      />
    </main>
  );
}

export default About;
