import React from 'react'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar'
import LOC_URL from 'constants/LOC_URL'
import Portfolio from 'pages/Portfolio'
import Experience from 'pages/Experience'
import Resume from 'pages/Resume'
import Contact from 'pages/Contact'
import Landing from 'pages/Landing'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path={LOC_URL.HOME} element={<Home />} />
          <Route path={LOC_URL.PORTFOLIO} element={<Portfolio />} />
          <Route path={LOC_URL.EXPERIENCE} element={<Experience />} />
          <Route path={LOC_URL.RESUME} element={<Resume />} />
          <Route path={LOC_URL.CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
