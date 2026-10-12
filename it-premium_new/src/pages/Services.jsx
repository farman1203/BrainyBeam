import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/siteData';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';

function Services() {
    return <main>
        <section className="page-hero">
            <div className="container">
                <Reveal><span className="kicker">OUR CAPABILITIES</span><h1>From first idea to <em>full scale.</em></h1><p>One senior team for strategy, design, engineering and growth. No hand-offs. No unnecessary layers.</p>
                </Reveal>
            </div>
        </section>
        <section className="section service-page">
            <div className="container">
                <div className="service-grid full">{services.map((s, i) => <Reveal key={s.title} delay={(i % 3) * .08} direction={i % 2 ? 'right' : 'left'}>
                    <ServiceCard {...s} index={i} />
                </Reveal>)}</div><Reveal>
                    <div className="process">
                        <div><span className="kicker">HOW WE WORK</span><h2>Simple process. <em>Serious craft.</em></h2>
                        </div><div className="process-steps">{['Discover', 'Design', 'Build', 'Launch'].map((x, i) => <div key={x}><b>0{i + 1}</b><h3>{x}</h3><p>{['Align on goals, users and the problem worth solving.', 'Turn strategy into a clear, testable experience.', 'Ship quality software in focused, fast iterations.', 'Measure, improve and keep the product moving.'][i]}</p></div>)}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    </main>
}

export default Services;
