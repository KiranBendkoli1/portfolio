import React from 'react'
import ResumeCard from './ResumeCard'
import winjit from '../../../assets/images/winjit.jpg'
import moderni from '../../../assets/images/moderni.jpeg'
import expo from '../../../assets/images/expo.jpeg'

const education = [
  {
    index: 'be',
    college: 'MVPs KBT College of Engineering',
    deg: 'Computer Engineering',
    duration: 'Sep’19 - Jun’23',
    list: [
      'Completed Computer Engineering with CGPA of 8.84',
      'Explored different fields in computer science'
    ]
  },
  {
    index: 'hsc',
    college: 'KTHM College Nashik',
    deg: 'Higher Secondary Certificate',
    duration: 'May’18 - Feb’19',
    list: ['Completed HSC with 71.38% in board exams']
  },
  {
    index: 'ssc',
    college: 'Exposys Data Labs',
    deg: 'Secondary School Certificate',
    duration: 'May’16 - Mar’17',
    list: ['Completed SSC with 87.00% in board exams']
  }
]

const Education = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {education.map((item) => (
          <ResumeCard
            key={item.college}
            title={item.deg}
            subTitle={item.college}
            result={item.duration}
            list={item.list}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
