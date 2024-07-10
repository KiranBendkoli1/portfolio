import React, { useEffect, useState } from 'react'
import URL_ROUTES from 'constants/URL_ROUTES'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useThemeStore from 'store/useThemeStore'
import { Toggle } from 'components/Toggle'
import { classNames } from 'utils'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [, setUpdateNav] = useState<boolean>()
  const { theme, toggleTheme } = useThemeStore((state) => state)
  const [navToggle, setNavToggle] = useState<boolean>(true)
  const [navItems, setNavItems] = useState([
    {
      title: 'Home',
      url: URL_ROUTES.HOME,
      active: true
    },
    {
      title: 'Portfolio',
      url: URL_ROUTES.PORTFOLIO,
      active: false
    },
    {
      title: 'Resume',
      url: URL_ROUTES.RESUME,
      active: false
    },
    {
      title: 'Contact',
      url: URL_ROUTES.CONTACT,
      active: false
    }
  ])

  const updateActive = (index: number) => {
    setNavItems((prev) => {
      prev.forEach((value) => (value.active = false))
      prev[index].active = true
      return prev
    })
  }

  useEffect(() => {
    if (location) {
      setNavItems((prev) => {
        prev.forEach((value) => {
          if (value.url === location.pathname) value.active = true
          else value.active = false
        })
        setUpdateNav(true)
        return prev
      })
    }
  }, [location])

  return (
    <>
      <nav className="bg-backround">
        <div className="flex flex-wrap items-center justify-between md:mx-12 p-4">
          <Link
            to={URL_ROUTES.HOME}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary font-cardo">
              Kiran Bendkoli
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="shadow-md ring-grape  inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none ring-2"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => {
              setNavToggle((prev) => !prev)
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-grape"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={classNames(
              'w-full md:block md:w-auto',
              navToggle ? 'block' : 'hidden'
            )}
            id="navbar-default"
          >
            <ul className="font-medium text-sm sm:text-lg flex flex-col p-4 md:p-0 mt-4  bg-backround  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li onClick={toggleTheme} className="my-0.5">
                <Toggle
                  value={theme === 'light' ? true : false}
                  onChange={toggleTheme}
                />
              </li>
              {navItems.map((item, index) => {
                return (
                  <li key={item.url}>
                    <div
                      onClick={() => {
                        navigate(item.url)
                        updateActive(index)
                      }}
                      className={
                        item.active
                          ? 'cursor-pointer block py-2 px-3 text-white bg-grape rounded md:bg-transparent md:text-grape md:p-0'
                          : 'cursor-pointer block py-2 px-3 text-primary rounded md:hover:bg-transparent md:border-0 md:hover:text-grape md:p-0'
                      }
                      aria-current="page"
                    >
                      {item.title}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
