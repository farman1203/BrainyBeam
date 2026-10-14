import { services } from '@/data/siteData';
import Reveal from '../components/Reveal';
import ServicesGrid from '../components/ServicesGrid';
import CtaSection from '../components/CtaSection';

const processSteps = [
  ['Discover', 'Align on goals, users and the problem worth solving.'],
  ['Design', 'Turn strategy into a clear, testable experience.'],
  ['Build', 'Ship quality software in focused, fast iterations.'],
  ['Launch', 'Measure, improve and keep the product moving.'],
];

function Services() {
  return (
    <main id="main">
      <title>Services | Orbit Labs</title>

      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">OUR CAPABILITIES</span>
            <h1>From first idea to <em>full scale.</em></h1>
            <p>One senior team for strategy, design, engineering and growth. No hand-offs. No unnecessary layers.</p>
          </Reveal>
        </div>
      </section>

      <section className="section service-page">
        <div className="container">
          <ServicesGrid items={services} />

          <Reveal>
            <div className="process">
              <div>
                <span className="kicker">HOW WE WORK</span>
                <h2>Simple process. <em>Serious craft.</em></h2>
              </div>
              <ol className="process-steps">
                {processSteps.map(([title, text], i) => (
                  <li key={title}>
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        kicker="HAVE AN IDEA?"
        title={<>Let’s make something <em>remarkable.</em></>}
        text="Tell us what you're building. We'll bring the right people, process and technology to make it real."
      />
    </main>
  );
}

export default Services;
