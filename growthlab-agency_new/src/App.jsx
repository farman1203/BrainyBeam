import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Logo from './components/Logo'
import { initSmooth } from './lib/smooth'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => initSmooth(), [])
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {!ready && (
          <motion.div className="loader" key="loader" exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <Logo size="lg" />
            </motion.div>
            <div className="loader-bar"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeInOut' }} /></div>
          </motion.div>
        )}
      </AnimatePresence>
      {ready && (
        <>
          <a className="skip" href="#main">Skip to content</a>
          <ScrollToTop />
          <Navbar />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
