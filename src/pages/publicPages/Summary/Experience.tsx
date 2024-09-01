import React from 'react'
import ResumeCard from './ResumeCard'
import winjit from '../../../assets/images/winjit.jpg'
import moderni from '../../../assets/images/moderni.jpeg'
import towaits from '../../../assets/images/towaits.jpeg'
import expo from '../../../assets/images/expo.jpeg'

const experience = [
  {
    index: 0,
    company: 'Winjit Technologies Pvt Ltd',
    logo: winjit,
    position: 'Software Developer',
    duration: 'Jun’23 - Present',
    list: [
      'Started Working as Frontend developer in React Js in multiple different projects',
      'Learned fundamentals of Node js as well'
    ]
  },
  {
    index: 1,
    company: 'Modern I Infotech',
    logo: moderni,
    position: 'Web Developement Intern',
    duration: 'Mar’22 - Apr’22',
    list: [
      'Performed tasks assigned by our mentors on web development such as developing homepages, navbar performing crud operations etc',
      'Majorly work with techonologies such as html,css,javascript, php and mysql'
    ]
  },
  {
    index: 2,
    company: 'Exposys Data Labs',
    logo: expo,
    position: 'Web Developer(Intern)',
    duration: 'Aug’21 - Sep’21',
    list: [
      'Created Multipage reasonsive and dynamic web application which has custom authentication, crud operations and session management',
      'Used html,css,javascript and bootstrap for frontend and php as backend and used mysql database.'
    ]
  }
]

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Job Experience</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {experience.map((item) => (
          <ResumeCard
            title={item.position}
            subTitle={item.company}
            result={item.duration}
            list={item.list}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
