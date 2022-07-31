import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
/* components */
import Home from './pages/Home'
import About from './pages/About'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
