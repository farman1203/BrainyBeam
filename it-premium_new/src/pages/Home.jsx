import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { services, projects, technologyGroups } from '../data/siteData';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';

function Home() {
    return <>
        <section className="hero">
            <div className="hero-grid" />
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="container hero-inner">
                <Reveal>
                    <div className="eyebrow">
                        <span /> Technology, but human.</div>
                </Reveal>
                <Reveal delay={.08}>
                    <h1>We build digital products <em>people love.</em>
                    </h1>
                </Reveal>
                <Reveal delay={.16}>
                    <p className="hero-copy">Orbit Labs is a modern technology partner for ambitious teams. We design, engineer and scale digital experiences that move businesses forward.</p>
                </Reveal>
                <Reveal delay={.24}>
                    <div className="hero-actions"><Link className="btn primary" to="/contact">Let’s build together <ArrowUpRight size={18} /></Link><a className="text-link" href="#work">Explore our work <ChevronRight size={17} /></a></div>
                </Reveal>
                <Reveal delay={.32}>
                    <div className="hero-stats"><div><b>40+</b><span>Products shipped</span></div><div><b>8 yrs</b><span>Engineering craft</span></div><div><b>98%</b><span>Client retention</span></div></div>
                </Reveal>
            </div>
            <motion.div className="hero-card"
                initial={{ opacity: 0, scale: .82, rotate: 7 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: .35, ease: [.22, 1, .36, 1] }}>

                <div className="card-glow" />
                <div className="mini-label">
                    LIVE SYSTEM
                </div>
                <div className="pulse"><i />
                    <span>All systems operational</span>
                </div>
                <div className="metric"><span>Product velocity</span><b>+42%</b></div>
                <div className="bars"><i /><i /><i /><i /><i /><i /><i />
                </div><div className="code-line"><span>01</span> ship({`{`}ideas{`}`}) <strong>→</strong>
                </div>
            </motion.div>
        </section>

        <section className="ticker">
            <div className="ticker-track">WEB DEVELOPMENT <span>✦</span> AI & AUTOMATION <span>✦</span> CLOUD ENGINEERING <span>✦</span> PRODUCT DESIGN <span>✦</span> WEB DEVELOPMENT <span>✦</span> AI & AUTOMATION <span>✦</span></div>
        </section>

        <section className="section" id="services">
            <div className="container">
                <Reveal>
                    <div className="section-head"><div><span className="kicker">WHAT WE DO</span><h2>Technology that creates <em>momentum.</em></h2></div><Link className="round-link" to="/services">View all services <ArrowUpRight size={19} /></Link>
                    </div>
                </Reveal>
                <div className="service-grid">{services.slice(0, 4).map((s, i) => <Reveal key={s.title} delay={i * .08} direction={i % 2 ? 'right' : 'left'}><ServiceCard {...s} index={i} /></Reveal>)}</div>
            </div>
        </section>

        <section className="dark-section" id="work">
            <div className="container">
                <Reveal>
                    <div className="section-head light"><div>
                        <span className="kicker">SELECTED WORK</span><h2>Small team. <em>Big outcomes.</em></h2></div><Link className="round-link light-link" to="/contact">Start a conversation <ArrowUpRight size={19} /></Link>
                    </div>
                </Reveal>
                <div className="project-list">{projects.map((p, i) => <Reveal key={p[0]} delay={i * .1} direction={i % 2 ? 'right' : 'left'}><article className="project"><div className={`project-art art-${i}`}><span>{['01', '02', '03'][i]}</span><div className="project-shape" /></div>
                    <div className="project-copy"><span>CASE STUDY / 0{i + 1}</span><h3>{p[0]}</h3><p>{p[1]}</p><a href="#contact">View case study <ArrowUpRight size={16} /></a>
                    </div>
                </article>
                </Reveal>)}
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


        <section className="section">
            <div className="container cta">
                <Reveal><span className="kicker">HAVE AN IDEA?</span><h2>Let’s make something <em>remarkable.</em></h2><p>Tell us what you're building. We'll bring the right people, process and technology to make it real.</p><Link className="btn primary" to="/contact">Start a project <ArrowUpRight size={18} /></Link>
                </Reveal>
            </div>
        </section></>
}

export default Home;
