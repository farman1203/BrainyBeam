// CONTACT PAGE (styles: ../styles/contact.css)
import { useEffect, useState } from 'react'
import { useReveals } from '../lib/reveal'
import Split from '../components/Split'
import Magnetic from '../components/Magnetic'
import Arrow from '../components/Arrow'
import { site } from '../data/site'
import '../styles/contact.css'

const budgets = ['Not sure yet', 'Under ₹50k', '₹50k – ₹2L', '₹2L – ₹5L', '₹5L+']
const init = { name: '', email: '', company: '', budget: budgets[0], msg: '' }

export default function Contact() {
  const root = useReveals()
  const [v, setV] = useState(init)
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  useEffect(() => { document.title = `Contact — ${site.name}` }, [])
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = 'Please tell us your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (v.msg.trim().length < 10) x.msg = 'A sentence or two about the project helps us a lot.'
    setErr(x)
    if (!Object.keys(x).length) setDone(true)
  }
  const field = (k, label, props = {}) => (
    <label className="fld">{label}
      <input value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} {...props} />
      {err[k] && <span className="ferr">{err[k]}</span>}
    </label>
  )
  return (
    <div ref={root} className="page">
      <section className="pg-head wrap">
        <span className="lbl rv">Contact</span>
        <Split text="Have a brief? Let’s talk." as="h1" className="pg-h" />
      </section>
      <section className="ct wrap">
        <div className="ct-info rv">
          <div><h4>Email</h4><a className="ul-link" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><h4>Phone</h4><p>{site.phone}</p></div>
          <div><h4>Studio</h4><p>{site.address[0]}<br />{site.address[1]}</p></div>
          <p className="note">Placeholder details. We reply to every message within one business day.</p>
        </div>
        <div className="ct-form rv">
          {done ? (
            <div className="ok"><h2>Thank you, {v.name.split(' ')[0]}.</h2><p>Your message is filled in correctly. This is a demo form, so nothing was sent — connect an email service or backend to receive enquiries.</p>
              <button className="ul-link" onClick={() => { setV(init); setDone(false) }}>Send another <Arrow /></button></div>
          ) : (
            <form onSubmit={submit} noValidate>
              {field('name', 'Your name *', { autoComplete: 'name' })}
              {field('email', 'Email *', { type: 'email', autoComplete: 'email' })}
              {field('company', 'Company', { autoComplete: 'organization' })}
              <label className="fld">Budget
                <select value={v.budget} onChange={set('budget')}>{budgets.map(b => <option key={b}>{b}</option>)}</select>
              </label>
              <label className="fld">Tell us about the project *
                <textarea rows="5" value={v.msg} onChange={set('msg')} aria-invalid={!!err.msg} />
                {err.msg && <span className="ferr">{err.msg}</span>}
              </label>
              <Magnetic strength={0.25}><button type="submit" className="cta-btn dark" data-cursor="Send">Send message <Arrow size={22} /></button></Magnetic>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
