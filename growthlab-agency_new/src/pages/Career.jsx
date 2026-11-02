// CAREER PAGE — perks, open roles, hiring process, gallery and application form, all in this one file (styles: ../styles/career.css)
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GraduationCap, Clock, Palette, HeartPulse, Users, TrendingUp, Plus, MapPin, Briefcase, CheckCircle2, Paperclip } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import Img from '../components/Img'
import { topic } from '../data/images'
import { scrollToEl } from '../lib/smooth'
import '../styles/career.css'

const ease = [0.22, 1, 0.36, 1]

/* ───────── DUMMY content — replace with your real openings ───────── */
const perks = [
  { icon: GraduationCap, t: 'Learning budget', d: 'Courses, tools and conferences that make you better at your craft.' },
  { icon: Clock, t: 'Flexible hours', d: 'We care about outcomes and collaboration, not clock-watching.' },
  { icon: Palette, t: 'Creative freedom', d: 'Real ownership over ideas, with a team that backs you.' },
  { icon: HeartPulse, t: 'Health & wellbeing', d: 'Health cover and a culture that respects rest.' },
  { icon: Users, t: 'Great people', d: 'Strategists, designers and developers who share what they know.' },
  { icon: TrendingUp, t: 'Clear growth path', d: 'Regular reviews and roles that grow as you do.' },
]

const roles = [
  { t: 'Digital Marketing Executive', dept: 'Marketing', type: 'Full-time', loc: 'Hybrid', exp: '1–3 yrs',
    d: 'Plan and run campaigns across search, social and email, and report on what works.',
    req: ['Hands-on with Google Ads or Meta Ads', 'Comfortable with analytics and reporting', 'Clear written communication'] },
  { t: 'SEO Specialist', dept: 'Marketing', type: 'Full-time', loc: 'On-site', exp: '2–4 yrs',
    d: 'Own technical, on-page and content SEO for a portfolio of client websites.',
    req: ['Experience with audits and keyword research', 'Familiar with Search Console and GA4', 'Curiosity about how search evolves'] },
  { t: 'Graphic Designer', dept: 'Creative', type: 'Full-time', loc: 'On-site', exp: '1–3 yrs',
    d: 'Create brand identities, social creative and campaign visuals that look sharp everywhere.',
    req: ['Strong portfolio of brand or social work', 'Proficient in Figma and Adobe tools', 'Eye for typography and layout'] },
  { t: 'Video Editor & Motion Designer', dept: 'Creative', type: 'Full-time', loc: 'On-site', exp: '2–4 yrs',
    d: 'Edit reels, brand films and ads, and bring layouts to life with motion.',
    req: ['Premiere Pro / After Effects skills', 'Understanding of short-form storytelling', 'Showreel or portfolio link'] },
  { t: 'Front-end Developer (React)', dept: 'Engineering', type: 'Full-time', loc: 'Hybrid', exp: '2–5 yrs',
    d: 'Build fast, accessible, animated websites for clients using React.',
    req: ['Solid React, JavaScript and CSS', 'Experience with animation libraries is a plus', 'Care for performance and accessibility'] },
  { t: 'Content & Social Media Intern', dept: 'Marketing', type: 'Internship', loc: 'On-site', exp: 'Fresher',
    d: 'Support content calendars, captions, community replies and trend research.',
    req: ['Strong writing in English (Hindi/Gujarati a plus)', 'Active on social platforms', 'Eager to learn and take feedback'] },
]

const steps = [
  { t: 'Apply', d: 'Send your details and portfolio or resume.' },
  { t: 'Intro call', d: 'A relaxed chat about you and the role.' },
  { t: 'Skills task', d: 'A short, paid-time-respecting practical task.' },
  { t: 'Offer', d: 'Meet the team, then a clear offer.' },
]

const gallery = ['office,team', 'coworking,creative', 'meeting,brainstorming', 'laptop,desk', 'celebration,team']
const experience = ['Fresher', '1–3 years', '3–5 years', '5+ years']
const GENERAL = 'General application'

function Role({ r, open, onToggle, onApply, i }) {
  return (
    <motion.div className={`rl ${open ? 'on' : ''}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: i * 0.05, ease }}>
      <h3>
        <button aria-expanded={open} onClick={onToggle}>
          <span className="rl-main"><strong>{r.t}</strong>
            <small><Briefcase size={14} />{r.dept} · {r.type}</small>
          </span>
          <span className="rl-meta"><span><MapPin size={14} />{r.loc}</span><span>{r.exp}</span></span>
          <motion.span className="rl-plus" animate={{ rotate: open ? 45 : 0 }}><Plus size={20} /></motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }} style={{ overflow: 'hidden' }}>
            <div className="rl-body">
              <p>{r.d}</p>
              <h4>What we look for</h4>
              <ul>{r.req.map(x => <li key={x}>{x}</li>)}</ul>
              <button className="btn btn-primary" onClick={() => onApply(r.t)}>Apply for this role</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ApplyForm({ role, setRole }) {
  const init = { first: '', email: '', phone: '', exp: experience[0], link: '', msg: '' }
  const [v, setV] = useState(init)
  const [file, setFile] = useState(null)
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })

  const onFile = e => {
    const f = e.target.files[0]
    if (!f) { setFile(null); return }
    const okType = /\.(pdf|docx?)$/i.test(f.name)
    if (!okType) setErr(x => ({ ...x, file: 'Please upload a PDF or Word file.' }))
    else if (f.size > 5 * 1024 * 1024) setErr(x => ({ ...x, file: 'File must be under 5 MB.' }))
    else { setErr(x => ({ ...x, file: undefined })); setFile(f); return }
    setFile(null)
  }
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!v.first.trim()) x.first = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (!/^\d{6,15}$/.test(v.phone.replace(/[\s-]/g, ''))) x.phone = 'Enter a valid phone number.'
    if (v.link && !/^https?:\/\/\S+\.\S+/.test(v.link)) x.link = 'Enter a full link starting with http(s)://'
    if (!file) x.file = err.file || 'Please attach your resume (PDF or Word, max 5 MB).'
    setErr(x)
    if (!Object.keys(x).some(k => x[k])) setDone(true)
  }
  const F = ({ k, label, type = 'text', req, ...r }) => (
    <label>{label}{req && ' *'}
      <input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `ce-${k}` : undefined} {...r} />
      {err[k] && <span className="ferr" id={`ce-${k}`}>{err[k]}</span>}
    </label>
  )
  return (
    <Reveal className="form-card" delay={0.15}>
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="ok" className="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <CheckCircle2 size={56} />
            <h3>Thanks, {v.first}!</h3>
            <p>Your application for <b>{role}</b> looks complete. This is a demo form, so nothing was actually sent — connect an email service or backend to receive applications.</p>
            <button className="btn btn-ghost" onClick={() => { setV(init); setFile(null); setDone(false) }}>Apply to another role</button>
          </motion.div>
        ) : (
          <motion.form key="f" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <small className="kick">Application</small>
            <h3>Tell us about you</h3>
            {F({ k: 'first', label: 'Full Name', req: true, autoComplete: 'name' })}
            <div className="grid2">
              {F({ k: 'email', label: 'Email', req: true, type: 'email', autoComplete: 'email' })}
              {F({ k: 'phone', label: 'Phone', req: true, type: 'tel', inputMode: 'tel', autoComplete: 'tel' })}
            </div>
            <div className="grid2">
              <label>Role
                <select value={role} onChange={e => setRole(e.target.value)}>
                  {roles.map(r => <option key={r.t}>{r.t}</option>)}<option>{GENERAL}</option>
                </select>
              </label>
              <label>Experience
                <select value={v.exp} onChange={set('exp')}>{experience.map(x => <option key={x}>{x}</option>)}</select>
              </label>
            </div>
            {F({ k: 'link', label: 'Portfolio / LinkedIn (optional)', type: 'url', placeholder: 'https://' })}
            <label>Resume *
              <span className={`file ${err.file ? 'bad' : ''}`}>
                <Paperclip size={18} /><span>{file ? file.name : 'Choose a PDF or Word file (max 5 MB)'}</span>
                <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} aria-invalid={!!err.file} aria-describedby={err.file ? 'ce-file' : undefined} />
              </span>
              {err.file && <span className="ferr" id="ce-file">{err.file}</span>}
            </label>
            <label>Why do you want to join us?<textarea rows="4" value={v.msg} onChange={set('msg')} /></label>
            <motion.button type="submit" className="btn btn-primary wide" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>Submit Application</motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default function Career() {
  const [open, setOpen] = useState(0)
  const [role, setRole] = useState(roles[0].t)
  useEffect(() => { document.title = 'Careers — GrowthLab' }, [])
  const apply = t => { setRole(t); const el = document.getElementById('apply'); if (el) scrollToEl(el) }

  return (
    <>
      <PageHero crumb="Career" lines={[['Build', 'Brands'], ['That', 'Matter.']]} lead="Join a small, ambitious team where your ideas ship, your skills grow and the work gets noticed." />

      <section className="section cr-sec" id="perks">
        <div className="container">
          <SectionHeading eyebrow="Life at GrowthLab" title={<>Why people <em>love working here</em>.</>} align="center" />
          <div className="perks">
            {perks.map((p, i) => (
              <motion.article key={p.t} className="perk" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }} whileHover={{ y: -8 }}>
                <motion.span className="perk-ic" whileHover={{ rotate: -8, scale: 1.1 }}><p.icon size={24} /></motion.span>
                <h3>{p.t}</h3><p>{p.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <SectionHeading eyebrow="Our space" title={<>A look inside <em>the studio</em>.</>} text="Sample photos — replace with pictures of your real team and office." />
          <div className="gal">
            {gallery.map((g, i) => (
              <motion.div key={g} className={`gal-i art g${i + 1}`} style={{ '--h': 18 + i * 7 }} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.8, delay: i * 0.08, ease }}>
                <Img src={topic(g, 61 + i, 900, 900)} alt="Sample photo of an agency team and workspace" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="container">
          <SectionHeading eyebrow="Open positions" title={<>Find your <em>next role</em>.</>} text="Sample openings — edit the list at the top of this file." />
          <div className="rl-list">
            {roles.map((r, i) => <Role key={r.t} r={r} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} onApply={apply} />)}
          </div>
        </div>
      </section>

      <section className="section" id="hiring">
        <div className="container">
          <SectionHeading eyebrow="Hiring process" title={<>Simple, fair and <em>transparent</em>.</>} align="center" />
          <div className="hp">
            {steps.map((s, i) => (
              <motion.div key={s.t} className="hp-i" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: i * 0.12, ease }}>
                <b>0{i + 1}</b><h3>{s.t}</h3><p>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="container cr-apply">
          <div className="cr-side">
            <SectionHeading eyebrow="Apply now" title={<>Ready to <em>join us</em>?</>} text="Pick a role (or send a general application), attach your resume and tell us why you’d be a great fit." />
            <Reveal className="note">We reply to every application. If we don’t have a role right now, we’ll keep your details in mind for the future.</Reveal>
          </div>
          <ApplyForm role={role} setRole={setRole} />
        </div>
      </section>

      <CTABanner title={<>Don’t see your <em>role</em>?</>} text="Send a general application — we’re always happy to meet talented people." primary={{ to: '/career#apply', label: 'Send an Open Application' }} secondary={{ to: '/about', label: 'Meet the Team' }} />
    </>
  )
}
