import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const LeftHero = () => {
  const iconClasses =
    'w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'
  return (
    <div className="pl-2 sml:pl-5 md:pl-20  w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm{' '}
          <span className="text-designColor capitalize">Kiran Bendkoli</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a{' '}
          <span>
            <Typewriter
              words={[
                ' Computer Engineer',
                ' Software Developer',
                ' React Js Developer'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      {/* Media */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <div className="flex gap-4 ">
            <span className={iconClasses}>
              <FaFacebookF />
            </span>
            <span className={iconClasses}>
              <FaTwitter />
            </span>
            <span className={iconClasses}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftHero
