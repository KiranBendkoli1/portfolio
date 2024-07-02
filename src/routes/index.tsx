import React from 'react'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
