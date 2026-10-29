import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import { brandsA, brandsB } from '../data/brands'

const Brand = ({ n }) => <span className="brand"><i>{n[0]}</i>{n}</span>

export default function Brands() {
  return (
    <section className="section brands" id="brands">
      <Reveal className="container sh sh-center">
        <span className="eyebrow">International brands</span>
        <h2>We’re happy to work with <em>well-known brands</em></h2>
      </Reveal>
      <Marquee speed={45}>{brandsA.map(n => <Brand key={n} n={n} />)}</Marquee>
      <Marquee speed={50} reverse>{brandsB.map(n => <Brand key={n} n={n} />)}</Marquee>
    </section>
  )
}
