import React, { useEffect, useState } from 'react'
import URL_ROUTES from 'constants/URL_ROUTES'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import useThemeStore from 'store/useThemeStore'
import { Toggle } from 'components/Toggle'
import { classNames } from 'utils'
import { MdClose } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [, setUpdateNav] = useState<boolean>()
  const { theme, toggleTheme } = useThemeStore((state) => state)
  const [showMenu, setShowMenu] = useState(true)
  const [navToggle, setNavToggle] = useState<boolean>(false)
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
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div>
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary font-cardo">
            Kiran Bendkoli
          </span>
        </div>
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navItems.map(({ title, url }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={url}
              >
                <ScrollLink
                  activeClass="active"
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary font-cardo">
                    Kiran Bendkoli
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li
                      key={item.url}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <ScrollLink
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.url}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

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
