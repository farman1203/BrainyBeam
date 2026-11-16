import { Fragment } from 'react'
import Img from './Img'
import { pic } from '../lib/images'

// Words wrapped in masks so GSAP can slide them up (.mk heading → see lib/reveal.js). Rendered by React, never mutated.
// NOTE: the space between words lives OUTSIDE the .w mask. A space inside an inline-block is collapsed by the browser,
// which is what made words stick together ("Selectedwork").
export function Split({ text, as: Tag = 'h2', className = '', mask = true }) {
  return (
    <Tag className={`${mask ? 'mk' : ''} ${className}`} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span className="w" aria-hidden="true"><span className="wi">{w}</span></span>{' '}
        </Fragment>
      ))}
    </Tag>
  )
}

// Paragraph whose words light up with scroll. parts = strings and { img } objects (inline pictures, key from lib/images.js).
export function ScrubText({ parts, as: Tag = 'p', className = '' }) {
  return (
    <Tag className={`scrub ${className}`}>
      {parts.map((p, i) => typeof p === 'string'
        ? p.split(' ').filter(Boolean).map((w, k) => <Fragment key={`${i}-${k}`}><span className="sw">{w}</span>{' '}</Fragment>)
        : <Fragment key={i}><span className="inl" aria-hidden="true"><Img {...pic(p.img, '')} /></span>{' '}</Fragment>)}
    </Tag>
  )
}
export default Split
