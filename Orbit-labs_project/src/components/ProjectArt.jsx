/**
 * Illustrative UI mockups for each project (inline SVG, no image files needed).
 * Replace with a real screenshot any time by setting `image` on the project in siteData.js.
 */
const frame = (accent, children) => (
  <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" className="project-art-svg" aria-hidden="true" focusable="false">
    {children}
    <g opacity=".0"><circle cx="0" cy="0" r="1" fill={accent} /></g>
  </svg>
);

function Window({ x = 70, y = 44, w = 500, h = 312, children }) {
  return (
    <g>
      <rect x={x} y={y + 8} width={w} height={h} rx="16" fill="#1a1816" opacity=".12" />
      <rect x={x} y={y} width={w} height={h} rx="16" fill="#fff" />
      <path d={`M${x} ${y + 16}a16 16 0 0 1 16-16h${w - 32}a16 16 0 0 1 16 16v14H${x}z`} fill="#f4f1ee" />
      <circle cx={x + 18} cy={y + 15} r="4" fill="#f4a58a" />
      <circle cx={x + 32} cy={y + 15} r="4" fill="#f2d28b" />
      <circle cx={x + 46} cy={y + 15} r="4" fill="#b9dcc4" />
      <rect x={x + 130} y={y + 9} width={w - 260} height="12" rx="6" fill="#e6e1dc" />
      {children}
    </g>
  );
}

const line = (x, y, w, c = '#e6e1dc', h = 7) => <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c} />;

function ECommerce() {
  const cards = [0, 1, 2, 3];
  const fills = ['#ffd9c4', '#f5e6d3', '#ffc9ad', '#eadfd4'];
  return frame('#f05a28', (
    <>
      <defs>
        <linearGradient id="pa-ec" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffcfba" /><stop offset="1" stopColor="#f05a28" /></linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#pa-ec)" />
      <Window>
        <rect x="70" y="74" width="500" height="34" fill="#fff" />
        {line(90, 88, 56, '#1a1816', 8)}
        {line(300, 90, 34)}{line(346, 90, 34)}{line(392, 90, 34)}
        <circle cx="528" cy="91" r="11" fill="#f05a28" /><rect x="523" y="88" width="10" height="8" rx="2" fill="#fff" />
        <rect x="90" y="120" width="460" height="86" rx="12" fill="#fff0e7" />
        {line(110, 142, 150, '#1a1816', 11)}{line(110, 164, 110)}
        <rect x="110" y="182" width="64" height="16" rx="8" fill="#f05a28" />
        <circle cx="498" cy="163" r="40" fill="#ffc9ad" /><circle cx="470" cy="180" r="24" fill="#f9b08b" />
        {cards.map((i) => (
          <g key={i}>
            <rect x={90 + i * 117} y="220" width="106" height="122" rx="10" fill="#faf8f6" stroke="#eee7e1" />
            <rect x={98 + i * 117} y="228" width="90" height="62" rx="7" fill={fills[i]} />
            {line(98 + i * 117, 300, 70, '#cfc8c1')}{line(98 + i * 117, 316, 34, '#f05a28', 8)}
            <circle cx={176 + i * 117} cy="321" r="8" fill="#1a1816" />
          </g>
        ))}
      </Window>
    </>
  ));
}

function Healthcare() {
  const days = [0, 1, 2, 3, 4, 5, 6];
  return frame('#0f9d8a', (
    <>
      <defs>
        <linearGradient id="pa-hc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e6f4ef" /><stop offset="1" stopColor="#9fd6c7" /></linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#pa-hc)" />
      <Window>
        <rect x="70" y="74" width="104" height="282" fill="#f7faf9" />
        <rect x="84" y="88" width="76" height="26" rx="8" fill="#0f9d8a" />
        <path d="M110 101h12m-6-6v12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        {[130, 158, 186, 214].map((y, i) => (<g key={y}><rect x="84" y={y} width="76" height="20" rx="8" fill={i === 0 ? '#d6efe8' : 'transparent'} />{line(94, y + 7, i === 0 ? 50 : 40, i === 0 ? '#0f9d8a' : '#cfd9d6')}</g>))}
        {line(194, 90, 130, '#1a1816', 10)}{line(194, 110, 90)}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={194 + i * 124} y="130" width="112" height="64" rx="10" fill="#f4faf8" stroke="#dcebe6" />
            {line(206 + i * 124, 144, 50, '#cfd9d6')}{line(206 + i * 124, 162, 64 - i * 8, '#0f9d8a', 11)}
          </g>
        ))}
        <rect x="194" y="208" width="232" height="132" rx="12" fill="#fff" stroke="#dcebe6" />
        {line(210, 222, 80, '#cfd9d6')}
        <path d="M210 310l28-34 26 20 30-46 28 28 30-40 34 30" fill="none" stroke="#0f9d8a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="438" y="208" width="132" height="132" rx="12" fill="#fff" stroke="#dcebe6" />
        {line(452, 222, 60, '#cfd9d6')}
        {days.map((d) => (<rect key={d} x={452 + (d % 4) * 28} y={244 + Math.floor(d / 4) * 28} width="22" height="22" rx="6" fill={d === 2 ? '#0f9d8a' : '#eaf3f0'} />))}
        <rect x="452" y="306" width="104" height="22" rx="11" fill="#1a1816" />
      </Window>
    </>
  ));
}

function RealEstate() {
  return frame('#c07a3a', (
    <>
      <defs>
        <linearGradient id="pa-re" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#efe8e0" /><stop offset="1" stopColor="#b9a48f" /></linearGradient>
        <linearGradient id="pa-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe9d6" /><stop offset="1" stopColor="#fff7ef" /></linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#pa-re)" />
      <Window>
        <rect x="90" y="76" width="460" height="28" rx="14" fill="#f4f1ee" />
        {line(108, 87, 80)}{line(204, 87, 56)}{line(276, 87, 56)}
        <rect x="474" y="80" width="68" height="20" rx="10" fill="#f05a28" />
        <rect x="90" y="116" width="286" height="224" rx="12" fill="url(#pa-sky)" />
        <rect x="90" y="292" width="286" height="48" rx="0" fill="#d9e6cf" />
        <path d="M90 340V316q143-26 286 0v24z" fill="#cfe0c3" />
        <rect x="168" y="204" width="130" height="94" fill="#fff" stroke="#e3d9cf" />
        <path d="M154 206l79-58 79 58z" fill="#f05a28" />
        <rect x="190" y="228" width="26" height="26" fill="#cfe3ee" /><rect x="250" y="228" width="26" height="26" fill="#cfe3ee" />
        <rect x="222" y="258" width="22" height="40" fill="#8b5a3c" />
        <rect x="104" y="126" width="74" height="22" rx="11" fill="#fff" opacity=".92" />{line(116, 134, 46, '#1a1816', 7)}
        <rect x="392" y="116" width="158" height="104" rx="12" fill="#f4eee8" />
        {[0, 1, 2, 3].map((i) => (<path key={i} d={`M${400 + i * 34} 214V${150 + (i % 2) * 14}h22v${64 - (i % 2) * 14}z`} fill={i % 2 ? '#e2d3c4' : '#d6c3b0'} />))}
        <circle cx="470" cy="150" r="12" fill="#f05a28" /><circle cx="470" cy="150" r="4.5" fill="#fff" />
        <rect x="392" y="232" width="158" height="108" rx="12" fill="#fff" stroke="#eee7e1" />
        {line(406, 246, 96, '#1a1816', 10)}{line(406, 266, 70)}
        {line(406, 290, 40, '#f05a28', 10)}
        <rect x="406" y="310" width="130" height="20" rx="10" fill="#1a1816" />
      </Window>
    </>
  ));
}

const ART = { ecommerce: ECommerce, healthcare: Healthcare, realestate: RealEstate };

function ProjectArt({ kind }) {
  const Art = ART[kind] ?? ECommerce;
  return <Art />;
}

export default ProjectArt;
