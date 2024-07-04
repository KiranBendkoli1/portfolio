import projects from 'data/Projects'
import React from 'react'
import { ProjectType } from 'types/common'

interface Props {
  project: ProjectType
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-card rounded my-4 sm:p-4 flex flex-col sm:flex-row  sm:space-x-6 w-fit shadow-lg">
      <div>
        <img src={project.img} className="w-[300px] h-[180px]" alt="" />
      </div>
      <div className="w-full sm:w-96">
        <div className="text-primary">{project.title}</div>
        <p className="text-secondary">{project.desc}</p>
        <p className="text-primary">{project.domain}</p>
      </div>
    </div>
  )
}

export default Project
