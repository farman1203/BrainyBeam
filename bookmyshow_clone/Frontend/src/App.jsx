import React from 'react'
import Header from './Website/Components/Header'
import Home from './Website/Pages/Home'
import Movies from './Website/Pages/Movies'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Home /></>}></Route>
          <Route path='/movie' element={<><Header /><Movies /></>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
