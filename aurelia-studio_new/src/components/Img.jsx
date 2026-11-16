import { useEffect, useRef, useState } from 'react'

// Fades in once loaded. Handles images that were already cached before React attached onLoad.
// pos = optional CSS object-position (which part of a photo stays in view when it is cropped).
// If a photo fails to load, the neutral box behind it stays (no broken-image icon).
export default function Img({ src, alt = '', className = '', eager = false, pos }) {
  const ref = useRef(null)
  const [ok, setOk] = useState(false)
  const [bad, setBad] = useState(false)
  useEffect(() => {
    setBad(false)
    const el = ref.current
    if (el && el.complete && el.naturalWidth > 0) setOk(true)
  }, [src])
  if (bad || !src) return null
  return <img ref={ref} className={`img ${ok ? 'on' : ''} ${className}`} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" style={pos ? { objectPosition: pos } : undefined} onLoad={() => setOk(true)} onError={() => setBad(true)} />
}
