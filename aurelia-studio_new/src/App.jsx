import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { initScroll, ScrollTrigger } from './lib/scroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => initScroll(), [])
  // layouts change between pages (images, fonts) → recompute scroll positions
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 500)
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
    return () => clearTimeout(t)
  }, [pathname])
  return (
    <>
      <PageTransition />
      <Cursor />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Work />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
