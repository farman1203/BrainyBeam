import React, { useEffect } from 'react'
import Home from './Home'
import ScrollToTop from './Component/ScroleToTop'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<><Navbar/><Home /></>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
