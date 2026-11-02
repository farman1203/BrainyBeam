# Aurelia — digital studio website

Editorial, animation-first agency site. **Vite + React** · **GSAP + ScrollTrigger** · **Lenis** (smooth scroll) · **Three.js** (3D hero + CTA scenes) · **anime.js** (counters, intro) · React Router.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```
Node.js 18+.

## Structure
```
src/
  pages/        Home.jsx (all sections in one file), Work, Project, Studio, Contact, NotFound
  styles/       global.css, home.css, work.css (Work + Project), studio.css, contact.css
  components/   Scene3D (Three.js), Header, Footer, Cursor, PageTransition, Split, Counter, Magnetic, Img, Arrow
  lib/          scroll.js (Lenis + GSAP), reveal.js (declarative scroll animations), images.js (all photos)
  data/         site.js (name, contact), projects.js
```

## Animation cheat-sheet (lib/reveal.js)
Add a class in the markup and the page animates it: `.rv` fade-up · `.mk` masked word reveal (use `<Split/>`) · `.scrub` words light up on scroll · `data-speed="0.5"` parallax · `data-zoom` image zoom on scroll · `.wipe` clip-path reveal · `data-cursor="View"` custom cursor label.

## Make it yours
- Studio name, city, contact: `src/data/site.js`.  Projects: `src/data/projects.js`.
- **Photos** — every picture is listed once in `src/lib/images.js`. By default they load from the reference template's CDN, so the site looks right immediately.
  For production run `npm run images` (downloads them to `public/images/`), then set `USE_LOCAL = true`. To use your own photos, replace the files in `public/images/` keeping the same names.
  The demo photos belong to the template author — use your own before going live.
- `SHOW_3D` at the top of `pages/Home.jsx` brings the Three.js hero/CTA scenes back (off by default to match the reference).
- Contact form validates but does not send anything yet.
