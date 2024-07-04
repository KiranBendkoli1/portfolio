import Project from 'components/Project/Project'
import projects from 'data/Projects'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="md:px-16 bg-backround h-full align-middle items-center flex justify-center shadow-xl">
      <div>
        {projects.map((project) => {
          return <Project project={project} key={project.index} />
        })}
      </div>
    </div>
  )
}

export default Portfolio
