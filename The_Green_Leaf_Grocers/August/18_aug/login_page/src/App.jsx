import React from 'react'
import Login from './Login'
import Pagenotfound_404 from './Pagenotfound_404'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import Registration from './Register';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Pagenotfound_404 />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom} />
    </div>
  )
}

export default App
