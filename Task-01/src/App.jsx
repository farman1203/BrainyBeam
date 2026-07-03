import React from 'react'
import Header from './Website/Component/Header'
import Home from './Website/Pages/Home'
import Footer from './Website/Component/Footer'
import About from './Website/Pages/About'
import Packges from './Website/Pages/Packges'
import Services from './Website/Pages/Services'
import Gallery from './Website/Pages/Gallery'
import Blogs from './Website/Pages/Blogs'
import Contact from './Website/Pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
            <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
            <Route path="/gallery" element={<><Header/><Gallery/><Footer/></>}></Route>
            <Route path="/blog" element={<><Header/><Blogs/><Footer/></>}></Route>
            <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
            <Route path="/services" element={<><Header/><Services/><Footer/></>}></Route>
            <Route path="/packges" element={<><Header/><Packges/><Footer/></>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
