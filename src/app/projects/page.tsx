import React from 'react'
import { ProjectProps } from './project-types'
import ProjectsClient from './client-projects'
import GET_PROJECTS from '../api/projects/route'

const getAllProjects = async () => {
  const response = await GET_PROJECTS()
  const data = await response.json()
  return data
}

type ProjectsPropsData = {
  data: ProjectProps
}

const Projects: React.FC<ProjectsPropsData> = async () => {

  const projects = await getAllProjects()

  console.log('console.log projects: ', projects)

  return (
    <div>
      <ProjectsClient
        data={projects}
      />
    </div>
  )

}


export default Projects