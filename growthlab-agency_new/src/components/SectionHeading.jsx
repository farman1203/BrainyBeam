import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`sh sh-${align}`}>
      <Reveal as="span" className="eyebrow" y={20}>{eyebrow}</Reveal>
      <Reveal as="h2" delay={0.1}>{title}</Reveal>
      {text && <Reveal as="p" delay={0.2} className="lead">{text}</Reveal>}
    </div>
  )
}
