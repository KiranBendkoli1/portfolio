import projects from 'data/ProjectsData'
import React, { useMemo } from 'react'
import { classNames } from 'utils'

interface Item {
  image_url: string
  title: string
  description: string
  github_link: string
  live: string
}

const Table = () => {
  const columns = [
    {
      title: 'images',
      srOnly: true,
      render: (item: Item) => {
        return <img className='rounded' src={item.image_url} alt={item.title} />
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
        return <p>View details</p>
      }
    }
  ]

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

  return (
    <div className='bg-backround'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th key={column.title} scope="col" className="px-16 py-3">
                  <span className={classNames(column.srOnly && 'sr-only')}>
                    {column.title}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dataObj, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="p-4">{col.render(dataObj)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
