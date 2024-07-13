import projects from 'data/ProjectsData'
import React, { useMemo } from 'react'
import { classNames } from 'utils'

interface Column {
  title: string
  srOnly: boolean
  render: (item: any) => React.ReactElement
}

const Table: React.FC<{ columns: Column[]; data: Record<string, any> }> = ({
  columns,
  data
}) => {
  return (
    <div className="bg-backround">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th key={column.title} scope="col" className="px-8 py-3 text-start">
                  <span className={classNames("truncate text-start", "")}>
                    {column.title}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dataObj: any, index: React.Key) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="p-4">
                    {col.render(dataObj)}
                  </td>
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
