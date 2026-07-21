import React from 'react'
import Header from './Website/Components/Header'
import Home from './Website/Pages/Home'
import Movies from './Website/Pages/Movies'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Website/Pages/Login'
import { Slide, ToastContainer, toast } from 'react-toastify';
import Footer from './Website/Components/Footer'
import Sign_up from './Website/Pages/Sign_up'
import PageNotFound from './Website/Pages/PageNotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Home /><Footer /></>}></Route>
          <Route path='/movie' element={<><Header /><Movies /><Footer /></>}></Route>
          <Route path='/login' element={<><Header /><Login /><Footer /></>}></Route>
          <Route path='/signup' element={<><Header /><Sign_up /><Footer /></>}></Route>
          <Route path='*' element={<><Header /><PageNotFound /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer transition={Slide} />
    </div>
  )
}

export default App
