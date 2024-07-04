import Project from 'components/Project/Project'
import projects from 'data/Projects'
import React from 'react'

const Portfolio = () => {
  return (
      <div className=" grid justify-center bg-backround">
        <h2 className="text-primary text-2xl -translate-x-10">Projects</h2>
        <div className="bg-backround h-full align-middle items-center flex justify-center flex-col">
          <div className='grid grid-cols-3 space-x-2'>
            {projects.map((project) => {
              return <Project project={project} key={project.index} />
            })}
          </div>
        </div>
      </div>
  )
}

export default Portfolio
