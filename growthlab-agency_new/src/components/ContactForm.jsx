import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import { services } from '../data/services'

const init = { first: '', last: '', code: '+91', phone: '', email: '', company: '', service: '', msg: '' }
const codes = ['+91', '+1', '+44', '+61', '+971', '+81']
const validate = v => {
  const e = {}
  if (!v.first.trim()) e.first = 'Please enter your first name.'
  if (!/^\d{6,15}$/.test(v.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid phone number.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  return e
}

// Demo form: validates, then shows a success state. Nothing is sent until you connect a backend / email service.
export default function ContactForm() {
  const [v, setV] = useState(init)
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const x = validate(v)
    setErr(x)
    if (!Object.keys(x).length) setDone(true)
  }
  const F = ({ k, label, type = 'text', req, ...r }) => (
    <label>{label}{req && ' *'}
      <input type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined} {...r} />
      {err[k] && <span className="ferr" id={`e-${k}`}>{err[k]}</span>}
    </label>
  )
  return (
    <Reveal className="form-card" delay={0.15}>
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="ok" className="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <CheckCircle2 size={56} />
            <h3>Thanks, {v.first}!</h3>
            <p>Your inquiry is filled in correctly. This is a demo form, so nothing was actually sent — connect an email service or backend to receive submissions.</p>
            <button className="btn btn-ghost" onClick={() => { setV(init); setDone(false) }}>Send another</button>
          </motion.div>
        ) : (
          <motion.form key="f" onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <small className="kick">Project brief</small>
            <h3>Start the conversation</h3>
            <div className="grid2">
              {F({ k: 'first', label: 'First Name', req: true, autoComplete: 'given-name' })}
              {F({ k: 'last', label: 'Last Name', autoComplete: 'family-name' })}
            </div>
            <div className="phone">
              <label>Code<select value={v.code} onChange={set('code')}>{codes.map(c => <option key={c}>{c}</option>)}</select></label>
              {F({ k: 'phone', label: 'Your Number', req: true, type: 'tel', inputMode: 'tel', autoComplete: 'tel-national' })}
            </div>
            {F({ k: 'email', label: 'Your Email', req: true, type: 'email', autoComplete: 'email' })}
            {F({ k: 'company', label: 'Company Name', autoComplete: 'organization' })}
            <label>I’m interested in
              <select value={v.service} onChange={set('service')}>
                <option value="">Select a service (optional)</option>
                {services.map(s => <option key={s.slug}>{s.title}</option>)}
              </select>
            </label>
            <label>Additional Message<textarea rows="4" value={v.msg} onChange={set('msg')} /></label>
            <motion.button type="submit" className="btn btn-primary wide" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>Submit Inquiry</motion.button>
            <p className="fine">By submitting, you agree to be contacted about your project.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </Reveal>
  )
}
