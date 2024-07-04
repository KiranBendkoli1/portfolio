import Project from 'components/Project/Project'
import projects from 'data/Projects'
import React from 'react'

const Portfolio = () => {
  return (
    <>
      <h2 className="md:px-16 text-primary text-2xl">Projects</h2>
      <div className="px-4 md:px-16 bg-backround h-full align-middle items-center flex justify-center flex-col">
        <div>
          {projects.map((project) => {
            return <Project project={project} key={project.index} />
          })}
        </div>
      </div>
    </>
  )
}

export default Portfolio
