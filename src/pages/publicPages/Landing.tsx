import React from 'react'
import Home from './Home'
import Portfolio from './Portfolio'
import Experience from './Experience/Experience'
import Contact from './Contact'
import Hero from './Hero'

const Landing = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}

export default Landing
