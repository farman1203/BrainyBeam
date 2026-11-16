# Studio610 — marketing agency website

Editorial, animation-first agency site. **Vite + React** · **GSAP + ScrollTrigger** · **Lenis** (smooth scroll) · **EmailJS** (contact form) · React Router. (Three.js scenes are included but switched off.)

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output in /dist
```
Node.js 18+.

## Structure
```
src/
  pages/        Home.jsx (all sections in one file), Work (/project), Project (/project/:slug), Studio, Contact, NotFound
  styles/       global.css (colour theme at the top), home.css, work.css, studio.css, contact.css
  components/   Header, Footer, Cursor, PageTransition, Split, Counter, Magnetic, Img, Arrow, Scene3D
  lib/          scroll.js (Lenis + GSAP), reveal.js (scroll animations), images.js (all photos)
  data/         site.js (name, contact, Instagram), projects.js (client stories)
public/images/  aeriq/ · labanista/ · thicc-burger/   (optimised .webp)
```

## Edit the content
- **Name, tagline, email, phone, Instagram:** `src/data/site.js`.
- **Add a project:** drop photos in `public/images/<client>/`, register them in `src/lib/images.js`, then add an entry in `src/data/projects.js`. Filter chips, slider, grid and detail page update by themselves. Add `metrics: [['+40%','Reach']]` only if you have real numbers.
- **Services / hero / statement / process text:** `src/pages/Home.jsx` (`groups`, `heroLines`, `statement`, `processText`).
- **Studio page text and team:** `src/pages/Studio.jsx`.
- **Colours:** only the `:root` block at the top of `src/styles/global.css`.
- `SHOW_3D` at the top of `Home.jsx` brings the Three.js hero/CTA scenes back.

## Contact form (EmailJS)
Put your keys in `.env` (see `.env.example`). Vite bakes them in at build time, so **add the same three variables in your hosting dashboard** (Vercel / Netlify → Environment variables) before deploying.

## Deploy
`vercel.json` and `public/_redirects` make direct links such as `/project/aeriq` work on Vercel and Netlify.
