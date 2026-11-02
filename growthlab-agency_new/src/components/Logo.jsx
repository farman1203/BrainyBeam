export default function Logo({ size = 'md' }) {
  return (
    <span className={`logo logo-${size}`} aria-label="GrowthLab">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <defs><linearGradient id="lg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#ff5a14" /><stop offset="1" stopColor="#ffb347" /></linearGradient></defs>
        <rect x="3" y="18" width="6" height="11" rx="2" fill="url(#lg)" />
        <rect x="13" y="11" width="6" height="18" rx="2" fill="url(#lg)" />
        <rect x="23" y="3" width="6" height="26" rx="2" fill="url(#lg)" />
      </svg>
      <span>Growth<b>Lab</b></span>
    </span>
  )
}
