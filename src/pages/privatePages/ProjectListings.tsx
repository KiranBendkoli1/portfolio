import Button from 'components/Button'
import Table from 'components/Table/Table'
import URL_ROUTES from 'constants/URL_ROUTES'
import projects from 'data/ProjectsData'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

interface Item {
  image_url: string
  title: string
  description: string
  github_link: string
  live: string
}

const ProjectListings = () => {
  const navigate = useNavigate()
  const data: Item[] = useMemo(() => {
    return projects.map((project) => {
      return {
        image_url: project.img,
        title: project.title,
        description: project.desc,
        github_link: project.source,
        live: project.link
      }
    })
  }, [projects])

  const columns = [
    {
      title: 'images',
      srOnly: true,
      render: (item: Item) => {
        return (
          <img
            className="rounded h-54 w-[400px]"
            src={item.image_url}
            alt={item.title}
          />
        )
      }
    },
    {
      title: 'project title',
      srOnly: false,
      render: (item: Item) => {
        return <p>{item.title}</p>
      }
    },
    {
      title: 'description',
      srOnly: false,
      render: (item: Item) => {
        return <p>{item.description}</p>
      }
    },
    {
      title: 'github',
      srOnly: false,
      render: (item: Item) => {
        return <a href={item.github_link}>Repo link</a>
      }
    },
    {
      title: 'live',
      srOnly: false,
      render: (item: Item) => {
        return <a href={item.live}>Live</a>
      }
    },
    {
      title: 'view details',
      srOnly: false,
      render: (item: Item) => {
        return (
          <p
            className="cursor-pointer"
            onClick={() => navigate(URL_ROUTES.ADMIN_VIEW_PROJECT)}
          >
            View details
          </p>
        )
      }
    }
  ]
  return (
    <div>
      <div className="flex justify-between my-4 sm:mb-10 sm:mt-4">
        <h1 className="text-primary text-3xl ">Projects</h1>
        <div>
          <Button
            onClick={() => {
              navigate(URL_ROUTES.ADMIN_ADD_PROJECT)
            }}
          >
            Add Project
          </Button>
        </div>
      </div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default ProjectListings
