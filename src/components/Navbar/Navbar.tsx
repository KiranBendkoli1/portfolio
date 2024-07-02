import React from 'react'
import LOC_URL from 'constants/LOC_URL'
import { Link } from 'react-router-dom'
import useThemeStore from 'store/useThemeStore'
import { Toggle } from 'components/Toggle'

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore((state) => state)
  return (
    <>
      <nav className="bg-backround">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={LOC_URL.HOME}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary">
              Kiran Bendkoli
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden   focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border bg-backround  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li onClick={toggleTheme}>
                <Toggle
                  value={theme === 'light' ? true : false}
                  onChange={toggleTheme}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-grape rounded md:bg-transparent md:text-grape md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-primary rounded md:hover:bg-transparent md:border-0 md:hover:text-grape md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-primary rounded md:hover:bg-transparent md:border-0 md:hover:text-grape md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-primary rounded md:hover:bg-transparent md:border-0 md:hover:text-grape md:p-0  "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-primary rounded  md:hover:bg-transparent md:border-0 md:hover:text-grape md:p-0  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
