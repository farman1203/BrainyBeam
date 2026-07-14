import React from 'react'
import ProductCard from './pages/ProductCard'
import AddProduct from './pages/AddProduct'
import Header from './pages/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Header/><AddProduct/></>}/>
            <Route path="/manage_product" element={<><Header/><ProductCard/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
