import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <div className="h-[400px] flex justify-center items-center content-center align-middle place-items-center justify-items-center">
      <div className="text-primary text-4xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hi, I'm a
          <span className="name">
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
            />{' '}
          </span>
        </motion.h1>
      </div>
    </div>
  )
}

export default Home
