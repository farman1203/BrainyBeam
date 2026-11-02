import { useState } from 'react'

// Sits inside a .art box: if the image fails to load, the gradient behind it still looks intentional.
export default function Img({ src, alt, className = '' }) {
  const [ok, setOk] = useState(false)
  const [bad, setBad] = useState(false)
  if (bad) return null
  return <img className={`img ${ok ? 'on' : ''} ${className}`} src={src} alt={alt} loading="lazy" decoding="async" onLoad={() => setOk(true)} onError={() => setBad(true)} />
}
