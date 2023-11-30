import prisma from '@/prisma/client';
import { ProjectProps } from "../../projects/project-types";

export async function GET(request: Request) {
  try {
    const projects = await prisma.project.findMany();
    const projectsWithThumbnail: ProjectProps = projects.map((project) => {
      // Adjust this mapping based on the actual structure of ProjectProps
      return {
        id: project.id,
        name: project.name,
        thumbnail: project.thumbnail,
        url: project.url,
        tags: project.tags,
        description: project.description,
        shortDesc: project.shortDesc,
      };
    }); 

    console.log('projectsWithThumbnail: ', projectsWithThumbnail)

    return new Response(JSON.stringify(projectsWithThumbnail), {
      headers: {
        'content-type': 'application/json',
      },
    });


  } catch (error: unknown) {
    
    console.log(error)
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      headers: {
        'content-type': 'application/json',
      },
    });
    
  }
}
