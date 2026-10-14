import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import Progress from './components/Progress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Home loads with the app (first paint); other pages are split into separate chunks.
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/Pnf404'));

function App() {
  return (
    // reducedMotion="user": honours prefers-reduced-motion for every Motion animation.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <a className="skip-link" href="#main">Skip to content</a>
        <Progress />
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
