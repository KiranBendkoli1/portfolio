import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Portfolio from './Portfolio'
import profileImg from '../assets/images/kiran2.png'
import Button from 'components/Button'

const Home = () => (
  <div className="container grid justify-center px-4">
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-primary text-xl sm:text-4xl h-[10px] my-10 sm:my-20 grid grid-cols-2"
      >
        <div className="name w-[500px]">
          Hi, I'm a
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
        </div>
        <div className="hidden sm:block sm:-translate-y-16 sm:translate-x-16 shadow-xl bg-backround/25 h-[250px] w-[250px] rounded-full overflow-clip border border-border">
          <img src={profileImg} alt="" />
        </div>
      </motion.div>
      <motion.p
        className="text-secondary w-full sm:w-[520px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        I am a Software developer currently working at Winjit Technologies Pvt.
        Ltd. Nashik. I mostly work on Frontend Technologies specifically React
        Js but also have basic understanding of Node js. I also likes to Develop
        android apps.
      </motion.p>
      <motion.div className='my-6'>
        <Button>View Projects</Button>
      </motion.div>
    </div>
  </div>
)

export default Home
