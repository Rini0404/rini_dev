import React from 'react'
import { ProjectProps } from './project-types'
import ProjectsClient from './client-projects'
import { GET } from '../api/projects/route'

const getAllProjects = async () => {
  const response = await GET()
  const data = await response.json()
  return data
}

type ProjectsPropsData = {
  data: ProjectProps
}

const Projects: React.FC<ProjectsPropsData> = async () => {

  const [projects, setProjects] = React.useState<ProjectProps>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getAllProjects();
      console.log('console.log projects: ', fetchedProjects);
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);


  return (
    <div>
      <ProjectsClient
        data={projects}
      />
    </div>
  )

}


export default Projects