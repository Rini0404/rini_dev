import React from "react";
import { ProjectProps } from "./project-types";
import ProjectsClient from "./client-projects";
import { GET } from "../api/projects/route";

// Assuming that 'ProjectProps' is an array type. Adjust it accordingly.
const Projects = async ({
  params,
  searchParams,
}: {
  params: { [key: string]: any };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const response = await GET();
  const data = await response.json();

  return (
    <div>
      <ProjectsClient data={data} />
    </div>
  );
};

export default Projects;
