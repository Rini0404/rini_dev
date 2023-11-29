import { NextResponse } from "next/server";
import prisma from '@/prisma/client';
import { ProjectProps } from "../../projects/project-types";



async function GET_PROJECTS(): Promise<NextResponse> {

  try {

    const projects = await prisma.project.findMany();
    const projectsWithThumbnail = projects.map((project) => ({
      ...project,
    })) as unknown as ProjectProps[];

    return new NextResponse(JSON.stringify(projectsWithThumbnail), {
      headers: {
        'content-type': 'application/json',
      },
    });

  } catch (error: unknown) {
    return new NextResponse(JSON.stringify({ error: (error as Error).message }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }

}

module.exports = GET_PROJECTS;