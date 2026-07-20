import React from 'react'
import Header from './Website/Components/Header'
import Home from './Website/Pages/Home'
import Movies from './Website/Pages/Movies'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Website/Pages/Login'
  import { ToastContainer, toast } from 'react-toastify';
// import Movie_details from './Website/Pages/Movie_details'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><Home /></>}></Route>
          <Route path='/movie' element={<><Header /><Movies /></>}></Route>
          <Route path='/login' element={<><Header /><Login /></>}></Route>
          {/* <Route path='/movie/movie_details' element={<><Header /><Movie_details /></>}></Route> */}
        </Routes>
      </BrowserRouter>
     <ToastContainer />
    </div>
  )
}

export default App
