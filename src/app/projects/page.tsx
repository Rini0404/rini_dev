import React from 'react'
import { ProjectProps, fakeProjects } from './project-types'
import ProjectsClient from './client-projects'


const Projects: React.FC<ProjectProps> = () => {


  return (
    <div>
      <ProjectsClient
        data={fakeProjects}
      />
    </div>
  )

}


export default Projects