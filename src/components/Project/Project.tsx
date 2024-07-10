import TitleSeperator from 'components/Seperator/TitleSeperator'
import projects from 'data/ProjectsData'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { ProjectType } from 'types/common'

interface Props {
  project: ProjectType
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-backround group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded ">
      <div className="">
        <img
          src={project.img}
          className="h-[280px] w-[350px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          alt={project.title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-cardo text-2xl font-bold text-white">
          {project.title}
        </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.desc}
        </p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          View details
        </button>
      </div>
    </div>
  )
}

export default Project
