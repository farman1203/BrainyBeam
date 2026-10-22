import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations'
import { teamMembers } from '../data/siteData'
import styles from './Team.module.css'

// Inline SVG social icons (avoids lucide-react version issues)
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

const values = [
  {
    title: 'Radical Collaboration',
    desc: 'We believe the best solutions come from diverse perspectives working in harmony — across disciplines, seniorities, and time zones.',
  },
  {
    title: 'Craft & Excellence',
    desc: "We hold ourselves to the highest standard. Every pull request, design decision, and client interaction reflects our commitment to quality.",
  },
  {
    title: 'Continuous Learning',
    desc: 'Technology evolves fast. We dedicate time every week to staying sharp, experimenting with new tools, and sharing knowledge openly.',
  },
]

export default function Team() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <TeamHero />
      <TeamGrid />
      <ValuesSection />
      <JoinCta />
    </motion.div>
  )
}

/* ─── Hero ─────────────────────────────────────────────── */
function TeamHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroInner}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="dot" />The Team
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Meet Our
            <br />
            <span className="text-green-gradient">Team</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            The people behind TechNova's digital solutions — a passionate group of engineers,
            designers, and strategists united by a love of building exceptional technology.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

/* ─── Team Grid ─────────────────────────────────────────── */
function TeamGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.teamSection}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.grid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Team Card ─────────────────────────────────────────── */
function TeamCard({ member }) {
  const [imgError, setImgError] = useState(false)
  const initials = member.name.split(' ').map(n => n[0]).join('')

  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Photo */}
      <div className={styles.photoWrap}>
        {!imgError ? (
          <img
            src={member.image}
            alt={member.imageAlt}
            className={styles.photo}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.photoFallback}>
            <span>{initials}</span>
          </div>
        )}
        <div className={styles.photoShine} />
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.roleBadge}>{member.role}</div>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.bio}>{member.bio}</p>

        {/* Social links */}
        <div className={styles.socials}>
          {member.linkedin && (
            <a href={member.linkedin} className={styles.socialLink} aria-label={`${member.name} on LinkedIn`}  rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} className={styles.socialLink} aria-label={`${member.name} on X`}  rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          )}
          {member.github && (
            <a href={member.github} className={styles.socialLink} aria-label={`${member.name} on GitHub`} rel="noopener noreferrer">
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Values Section ────────────────────────────────────── */
function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={`section ${styles.values}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.valuesHeader}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-label" variants={fadeUp}>
            <span className="dot" />How We Work
          </motion.div>
          <motion.h2 className="text-h2" variants={fadeUp}>
            Values That Drive
            <span className="text-green-gradient"> Us</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.valuesGrid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {values.map(({ title, desc }) => (
            <motion.div key={title} className={styles.valueCard} variants={fadeUp}>
              <div className={styles.valueLine} />
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueDesc}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Join CTA ──────────────────────────────────────────── */
function JoinCta() {
  const ref = useRef(null)
  const inView = useInView(ref, viewportOnce)

  return (
    <section className={styles.joinCta} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.ctaContent}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
              <span className="dot" />We're Hiring
            </div>
            <h2 className={styles.ctaTitle}>
              Want to Join the Team?
            </h2>
            <p className={styles.ctaSub}>
              We're always looking for talented engineers, designers, and problem-solvers who share our passion for building technology that matters.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
