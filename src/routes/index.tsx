import React from 'react'
import Home from 'pages/publicPages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import URL_ROUTES from 'constants/URL_ROUTES'
import Portfolio from 'pages/publicPages/Portfolio'
import Resume from 'pages/publicPages/Resume'
import ProjectDetails from 'pages/publicPages/ProjectDetails'
import Login from 'pages/publicPages/Login'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Dashboard from 'pages/privatePages/Dashboard'
import Messages from 'pages/privatePages/Messages'
import Profile from 'pages/privatePages/Profile'
import ProjectListings from 'pages/privatePages/ProjectListings'
import AddProject from 'pages/privatePages/AddProject'
import Hero from 'pages/publicPages/Hero'
import Contact from 'pages/publicPages/Contact'
import Experience from 'pages/publicPages/Experience'
const AppRouter = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index path={URL_ROUTES.HOME} element={<Hero />} />
            <Route path={URL_ROUTES.PORTFOLIO} element={<Portfolio />} />
            <Route path={URL_ROUTES.RESUME} element={<Resume />} />
            <Route path={URL_ROUTES.EXPERIENCE} element={<Experience/>}/>
            <Route path={URL_ROUTES.CONTACT} element={<Contact />} />
            <Route
              path={URL_ROUTES.PROJECT_DETAILS}
              element={<ProjectDetails />}
            />
            <Route path={URL_ROUTES.LOGIN} element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              index
              path={URL_ROUTES.ADMIN_DASHBOARD}
              element={<Dashboard />}
            />
            <Route
              path={URL_ROUTES.ADMIN_PROJECTS}
              element={<ProjectListings />}
            />
            <Route
              path={URL_ROUTES.ADMIN_VIEW_PROJECT}
              element={<ProjectDetails />}
            />
            <Route
              path={URL_ROUTES.ADMIN_ADD_PROJECT}
              element={<AddProject />}
            />
            <Route path={URL_ROUTES.ADMIN_INBOX} element={<Messages />} />
            <Route path={URL_ROUTES.ADMIN_PROFILE} element={<Profile />} />9
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
