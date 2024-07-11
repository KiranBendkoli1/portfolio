import Navbar from 'components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default PublicRoute
