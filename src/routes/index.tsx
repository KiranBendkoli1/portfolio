import React from 'react'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar'
import URL_ROUTES from 'constants/URL_ROUTES'
import Portfolio from 'pages/Portfolio'
import Resume from 'pages/Resume'
import Contact from 'pages/Contact'
import ProjectDetails from 'pages/ProjectDetails'
import Login from 'pages/Login'
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path={URL_ROUTES.HOME} element={<Home />} />
          <Route path={URL_ROUTES.PORTFOLIO} element={<Portfolio />} />
          <Route path={URL_ROUTES.RESUME} element={<Resume />} />
          <Route path={URL_ROUTES.CONTACT} element={<Contact />} />
          <Route
            path={URL_ROUTES.PROJECT_DETAILS}
            element={<ProjectDetails />}
          />
          <Route path={URL_ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
