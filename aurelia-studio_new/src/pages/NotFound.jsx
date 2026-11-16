import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow'

export default function NotFound() {
  return (
    <section className="nf wrap">
      <span className="lbl">Error 404</span>
      <h1>This page wandered off.</h1>
      <Link className="ul-link big" to="/">Back to home <Arrow /></Link>
    </section>
  )
}
