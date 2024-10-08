import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import image from '../../../assets/images/bitmoji3.png'

const ContactLeft = () => {
  const iconClasses =
    'w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <img
            className="w-8/12 object-fit rounded-lg mb-2"
            src={image}
            alt="contactImg"
          />
        </div>
        <h3 className="text-3xl font-bold text-white">Kiran Bendkoli</h3>
        <p className="text-lg font-normal text-gray-400">Software Developer</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 853 062 8606</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{' '}
          <span className="text-lightText">kiranbendkoli24@gmail.com</span>
        </p>
      </div>
      {/* Media */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <div className="flex gap-4 ">
            <a
              href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/"
              target="_blank"
              className={iconClasses}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/KiranBendkoli1"
              target="_blank"
              className={iconClasses}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLeft
