import React from 'react'
import { ProjectProps } from './project-types'
import ProjectsClient from './client-projects'

const getAllProjects = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/projects`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('console.log data: ', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
};




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