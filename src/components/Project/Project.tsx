import projects from 'data/Projects'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { ProjectType } from 'types/common'

interface Props {
  project: ProjectType
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-card rounded-lg m-2 flex flex-col w-fit shadow-lg -translate-x-10 overflow-hidden">
      <div>
        <img src={project.img} className="w-[400px] h-[180px]" alt="" />
      </div>
      <div className="bg-backround/60 backdrop-blur-sm w-[400px] h-[150px] px-2">
        <div className="text-primary text-xl">{project.title}</div>
        <p className="text-secondary">{project.desc}</p>
        <p className="text-primary">{project.domain}</p>
      </div>
    </div>
  )
}

export default Project
