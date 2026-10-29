export default function Marquee({ children, reverse = false, speed = 40 }) {
  return (
    <div className="mq">
      <div className={`mq-track ${reverse ? 'rev' : ''}`} style={{ '--d': `${speed}s` }}>
        <div className="mq-set">{children}</div>
        <div className="mq-set" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
