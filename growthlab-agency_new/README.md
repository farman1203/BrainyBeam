# GrowthLab Agency

React + Vite + Motion for React + React Router + Lucide. Plain CSS, one stylesheet per page.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```
Node.js 18+ required.

## Folder structure
```
public/                 hero-video.mp4, hero-img-1.jpg
src/
  main.jsx  App.jsx     router + intro loader + smooth scroll
  pages/                ONE file per page (all sections + page data inside)
    Home.jsx  About.jsx  Services.jsx  Projects.jsx  Career.jsx  Contact.jsx  NotFound.jsx
  styles/
    global.css          base, navbar, footer, buttons, forms, shared components
    animations.css      keyframes + reduced-motion
    home.css  about.css  services.css  projects.css  career.css  contact.css
  components/           shared pieces: Navbar, Footer, PageHero, CTABanner, Accordion,
                        ContactForm, Button, Reveal, SectionHeading, Odometer, Img, Marquee, Logo, ScrollToTop
  data/                 services.js, projects.js (shared by nav/footer/home/pages), nav.js, images.js
  lib/smooth.js         Lenis smooth scrolling helpers
```

## Things to replace (all dummy)
- Photos: `src/data/images.js` (keyword-matched loremflickr.com photos). Use your own files from `public/images`.
- Client names, stats, team, roles, contact details, testimonials-style content: top of each page file.
- Forms (Contact, Career) validate but do **not** send anything yet — connect an email service / backend.
