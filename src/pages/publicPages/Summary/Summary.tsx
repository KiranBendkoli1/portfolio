import { motion } from 'framer-motion'
import Experience from './Experience'
import Education from './Education'
import Title from 'components/Layouts/Title'

const Summary = () => {
  return (
    <section id='summary' className='pt-20'>
      <div className="flex justify-center">
        <Title title="My Summary" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full grid grid-cols-1 md:grid-cols-2  lgl:flex-row gap-10 lgl:gap-20"
      >
        <Experience />
        <Education />
      </motion.div>
    </section>
  )
}

export default Summary
