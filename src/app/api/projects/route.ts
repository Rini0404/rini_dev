import { NextResponse,  NextRequest } from "next/server";
import prisma from '@/prisma/client';
import { ProjectProps } from "../../projects/project-types";
import React from "react";


async function GET_PROJECTS(req: NextRequest, res: NextResponse) {

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

async function handler(req: NextRequest, res: NextResponse) {
  return GET_PROJECTS(req, res);
}

export { handler as GET}