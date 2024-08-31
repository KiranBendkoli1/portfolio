import Title from 'components/Layouts/Title'
import Project from 'components/Project/Project'
import projects from 'data/ProjectsData'

const Portfolio = () => {
  return (
    <section id="projects" className='pt-20'>
      <div className="flex justify-center">
        <Title title="My Projects" />
      </div>
      <div className="flex min-h-screen items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {projects.map((project) => {
            return <Project project={project} key={project.index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
