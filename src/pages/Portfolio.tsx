import Project from 'components/Project/Project'
import TitleSeperator from 'components/Seperator/TitleSeperator'
import projects from 'data/ProjectsData'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="">
      <TitleSeperator title={'Projects'} />
      <h2 className="text-primary text-2xl text-center divider"></h2>
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
