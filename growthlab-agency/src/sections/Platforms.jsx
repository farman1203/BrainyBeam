import { Search, Instagram, Facebook, Youtube, Linkedin, Twitter, MessageCircle, ShoppingBag } from 'lucide-react'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'

const platforms = [[Search, 'Google'], [Instagram, 'Instagram'], [Facebook, 'Facebook'], [Youtube, 'YouTube'], [Linkedin, 'LinkedIn'], [Twitter, 'X (Twitter)'], [MessageCircle, 'WhatsApp'], [ShoppingBag, 'Shopify']]
const tech = ['WordPress', 'React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'MySQL', 'HTML5']

export default function Platforms() {
  return (
    <section className="plat" id="platforms" aria-labelledby="plat-h">
      <Reveal className="container plat-head">
        <p>Whether you’re starting out, growing fast or scaling big,</p>
        <h2 id="plat-h">Platforms &amp; Technologies We Work With</h2>
      </Reveal>
      <Marquee speed={38}>{platforms.map(([Icon, n]) => <span className="chip-lg" key={n}><Icon size={20} />{n}</span>)}</Marquee>
      <Marquee speed={44} reverse>{tech.map(n => <span className="chip-lg alt" key={n}>{n}</span>)}</Marquee>
    </section>
  )
}
