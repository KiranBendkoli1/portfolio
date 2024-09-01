import React, { useEffect, useState } from 'react'
import URL_ROUTES from 'constants/URL_ROUTES'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import useThemeStore from 'store/useThemeStore'
import { MdClose } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { mergeClass } from 'utils'

const initNavs = [
  {
    title: 'Home',
    url: 'home',
    active: true
  },
  {
    title: 'Projects',
    url: 'projects',
    active: false
  },
  {
    title: 'Summary',
    url: 'summary',
    active: false
  },
  {
    title: 'Resume',
    url: URL_ROUTES.RESUME,
    active: false
  },
  {
    title: 'Contact',
    url: 'contact',
    active: false
  }
]

const Navbar = () => {
  const location = useLocation()
  const [, setUpdateNav] = useState<boolean>()
  const { theme, toggleTheme } = useThemeStore((state) => state)
  const [showMenu, setShowMenu] = useState(false)
  const [navItems, setNavItems] = useState(initNavs)

  useEffect(() => {
    if (location.pathname === URL_ROUTES.RESUME) {
      setNavItems([
        {
          title: 'Home',
          url: URL_ROUTES.HOME,
          active: false
        },
        {
          title: 'Resume',
          url: URL_ROUTES.RESUME,
          active: true
        }
      ])
    } else {
      setNavItems(initNavs)
    }
  }, [location])

  // useEffect(() => {
  //   if (location) {
  //     setNavItems((prev) => {
  //       prev.forEach((value) => {
  //         if (value.url === location.pathname) value.active = true
  //         else value.active = false
  //       })
  //       setUpdateNav(true)
  //       return prev
  //     })
  //   }
  // }, [location])

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
            {navItems.map(({ title, url, active }) => (
              <li
                className={mergeClass(
                  'text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                )}
                key={url}
              >
                {url.startsWith('/') ? (
                  <Link to={url}>{title}</Link>
                ) : (
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
                )}
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
            <div className=" h-screen w-[80%] overflow-hidden absolute top-0 right-0 bg-gray-900 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary font-cardo">
                    Kiran Bendkoli
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {navItems.map(({ url, title }) => (
                    <li
                      key={url}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      {url.startsWith('/') ? (
                        <Link to={url}>{title}</Link>
                      ) : (
                        <ScrollLink
                          activeClass="active"
                          to={url}
                          spy={true}
                          smooth={true}
                          offset={-50}
                          duration={500}
                        >
                          {title}
                        </ScrollLink>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
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
    </>
  )
}

export default Navbar
