import Carousel from 'components/Carousel'
import projects from 'data/ProjectsData'

const ProjectDetails = () => {
  return (
    <div className="container grid justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Carousel project={projects[0]} />
        <div className="w-[500px] mt-16 pl-4">
          <h1 className="text-primary text-3xl font-cardo">
            {projects[0].title}
          </h1>
          <p className="text-secondary my-2">{projects[0].desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
