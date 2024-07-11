import Sidebar from 'components/Sidebar'
import URL_ROUTES from 'constants/URL_ROUTES'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from 'store/useAuthStore'

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthStore((state) => state)
  return (
    <>
      <Sidebar>
        {isAuthenticated ? (
          <Outlet />
        ) : (
          <Navigate to={URL_ROUTES.HOME} replace />
        )}
      </Sidebar>
    </>
  )
}

export default PrivateRoute
