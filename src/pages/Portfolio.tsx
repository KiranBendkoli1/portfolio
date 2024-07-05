import Project from 'components/Project/Project'
import projects from 'data/Projects'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="">
      <h2 className="text-primary text-2xl text-center">Projects</h2>
      <div className="flex min-h-screen items-center justify-center  bg-backround">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return <Project project={project} key={project.index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
