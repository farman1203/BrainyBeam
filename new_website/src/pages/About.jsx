import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Zap, Users, Award, Clock } from 'lucide-react'
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { stats, teamMembers } from '../data/siteData'
import styles from './About.module.css'

export default function About() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <AboutHero />
      <MissionSection />
      <StorySection />
      <ExpertiseSection />
      <TeamSection />
      <CtaStrip />
    </motion.div>
  )
}

function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label" style={{ marginBottom: 'var(--space-5)' }}>
              <span className="dot" />About TechNova
            </div>
            <h1 className={styles.heroTitle}>
              Technology with
              <br />
              <span className="text-green-gradient">Purpose & Craft</span>
            </h1>
            <p className={styles.heroSub}>
              Founded on the belief that great technology should be both powerful and beautiful,
              TechNova has been at the forefront of digital innovation for over 12 years.
              We don't just build software — we craft experiences that transform businesses.
            </p>
          </motion.div>
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.heroStat}>
                <span className={styles.heroStatVal}>{value}</span>
                <span className={styles.heroStatLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To empower ambitious companies with technology that is not only functional but visionary — driving measurable growth and lasting competitive advantage.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'A world where every business has access to elite-grade digital products — built with transparency, craft, and an obsessive focus on outcomes.',
    },
    {
      icon: Zap,
      title: 'Our Promise',
      text: 'We treat your project as our own. We communicate proactively, deliver consistently, and stand by everything we build — long after launch.',
    },
  ]

  return (
    <section className={`section ${styles.mission}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.missionGrid}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pillars.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} className={styles.pillarCard} variants={fadeUp}>
              <div className={styles.pillarIcon}>
                <Icon size={22} />
              </div>
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarText}>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  const timeline = [
    { year: '2012', event: 'Founded in San Francisco with a team of 4.' },
    { year: '2015', event: 'Launched our first enterprise platform, serving 500K users.' },
    { year: '2018', event: 'Expanded to AI/ML services; team grows to 25 engineers.' },
    { year: '2020', event: 'Remote-first transformation; global talent network established.' },
    { year: '2022', event: 'Milestone: 100 shipped products, $500M+ in client revenue attributed.' },
    { year: '2024', event: 'Launched dedicated AI division; 40+ team members.' },
  ]

  return (
    <section className={`section ${styles.story}`} ref={ref}>
      <div className="container">
        <div className={styles.storyLayout}>
          <motion.div
            className={styles.storyText}
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="section-label">
              <span className="dot" />Our Journey
            </div>
            <h2 className="text-h2">
              12 Years of
              <span className="text-green-gradient"> Building</span>
            </h2>
            <p className="text-body-lg" style={{ marginTop: 'var(--space-4)' }}>
              What started as a small consultancy has grown into a full-service technology studio
              with global reach. Every milestone has been driven by one goal: helping our clients win.
            </p>
            <p className="text-body" style={{ marginTop: 'var(--space-4)' }}>
              We've navigated market shifts, embraced new paradigms — from cloud-native to AI-first —
              and continuously invested in the craft of building exceptional software.
            </p>
          </motion.div>

          <motion.div
            className={styles.timeline}
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {timeline.map(({ year, event }) => (
              <motion.div key={year} className={styles.timelineItem} variants={fadeRight}>
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineEvent}>{event}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  const areas = [
    { icon: Zap, label: 'Product Engineering', desc: 'End-to-end development from strategy to deployment.' },
    { icon: Users, label: 'Team Augmentation', desc: 'Embed senior engineers directly into your team.' },
    { icon: Award, label: 'Technical Advisory', desc: 'Architecture reviews, tech stack audits, and roadmaps.' },
    { icon: Clock, label: 'Rapid Prototyping', desc: 'From idea to working prototype in 2–4 weeks.' },
  ]

  return (
    <section className={`section ${styles.expertise}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}><span className="dot" />What We Excel At</motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Depth Across Every
            <span className="text-green-gradient"> Discipline</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.expertiseGrid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {areas.map(({ icon: Icon, label, desc }) => (
            <motion.div key={label} className={styles.expertiseCard} variants={fadeUp} whileHover={{ y: -5 }}>
              <Icon size={28} className={styles.expertiseIcon} />
              <h3 className={styles.expertiseLabel}>{label}</h3>
              <p className={styles.expertiseDesc}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.team}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}><span className="dot" />The Team</motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Leadership Built on
            <span className="text-green-gradient"> Excellence</span>
          </motion.h2>
          <motion.p className="text-body-lg" variants={fadeUp} style={{ maxWidth: 520 }}>
            Placeholder profiles — replace with real team bios and photos when available.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.teamGrid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((m) => (
            <motion.div key={m.name} className={styles.teamCard} variants={fadeUp} whileHover={{ y: -5 }}>
              <div className={styles.teamAvatar}>
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className={styles.teamName}>{m.name}</h3>
              <span className={styles.teamRole}>{m.role}</span>
              <p className={styles.teamBio}>{m.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CtaStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={styles.ctaStrip} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.stripInner}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div>
            <h2 className={styles.stripTitle}>Ready to work with us?</h2>
            <p className={styles.stripSub}>Let's build something remarkable together.</p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
