# TechNova – Emerald Future Website

## 🚀 Quick Start

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## 🌿 Design System: "Emerald Future"

**Colors:**
- `--background: #FFFFFF` — Dominant white background  
- `--primary-green: #15803D` — Primary brand color
- `--accent-green: #16A34A` — Interactive accents
- `--bright-green: #22C55E` — Highlights, CTAs
- `--mint-green: #86EFAC` — Soft accents
- `--deep-forest: #14251B` — Dark text & footer

**Typography:**
- Headings: Space Grotesk
- Body: Inter

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── HeroSection.jsx      # Main hero with 3D canvas integration
│   │   └── HeroSection.module.css
│   ├── layout/
│   │   ├── Navbar.jsx           # Sticky nav with mobile menu
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx           # Multi-column footer
│   │   └── Footer.module.css
│   └── three/
│       └── HeroCanvas.jsx       # Three.js emerald glass sphere
├── data/
│   └── siteData.js              # ✏️ Edit all content here
├── hooks/
│   └── useAnimations.js         # Reusable motion variants
├── pages/
│   ├── Home.jsx / Home.module.css
│   ├── About.jsx / About.module.css
│   ├── Services.jsx / Services.module.css
│   ├── Projects.jsx / Projects.module.css
│   ├── Technologies.jsx / Technologies.module.css
│   ├── Contact.jsx / Contact.module.css
│   └── NotFound.jsx / NotFound.module.css
├── styles/
│   └── globals.css              # CSS custom properties & global styles
├── App.jsx                      # Routing & page transitions
└── main.jsx
```

## ✏️ Customization

All editable content lives in [`src/data/siteData.js`](src/data/siteData.js):

- **`siteConfig`** — Company name, email, phone, address, social links
- **`services`** — Service cards and descriptions
- **`projects`** — Portfolio items
- **`technologies`** — Tech stack by category
- **`process`** — Development process steps
- **`stats`** — Key metrics
- **`teamMembers`** — Team bios (replace with real data)

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero 3D + Services + Projects + Process + CTA |
| `/about` | About | Story, Mission, Timeline, Team |
| `/services` | Services | Expandable service cards, Why Us |
| `/projects` | Projects | Filterable portfolio grid |
| `/technologies` | Technologies | Stack by category with level badges |
| `/contact` | Contact | Form with validation + info panel |
| `*` | 404 | Custom green error page |

## 🎨 3D Visual

The hero uses a **custom Three.js scene** (no R3F dependency):
- Emerald glass sphere with physical transmission material
- Floating crystal shards orbiting the sphere
- Three concentric rings with independent rotation
- Pointer-responsive rotation
- Animated green point lights
- WebGL fallback for unsupported devices

## ⚡ Performance

- Three.js canvas is **lazy-loaded** via `React.lazy`
- CSS Modules for zero class name collision
- Proper Three.js resource disposal on unmount
- `prefers-reduced-motion` respected
- Production build ~134KB gzipped for Three.js chunk
