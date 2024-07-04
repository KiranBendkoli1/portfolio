import projects from 'data/Projects'
import React from 'react'
import { ProjectType } from 'types/common'

interface Props {
  project: ProjectType
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-card rounded my-4 p-4 flex space-x-6 w-fit ">
      <div>
        <img src={project.img} className="w-[300px] h-[180px]" alt="" />
      </div>
      <div className="w-96">
        <div className="text-primary">{project.title}</div>
        <p className="text-secondary">{project.desc}</p>
        <p className="text-primary">{project.domain}</p>
      </div>
    </div>
  )
}

export default Project
