"use client";
import React, { useState, useEffect } from 'react';
import ProjectsClient from './client-projects';
import { ProjectProps } from './project-types';
import { ProjectSkeleton } from '@/src/components/projectsSkeleton';

const getAllProjects = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/projects`);
    console.log('RINI: ', response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('RINI: ', data)
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectProps>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="projects-container" style={{ maxWidth: "900px", margin: "0 auto" }}>
        {Array.from({ length: 6 }, (_, index) => (
          <ProjectSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <ProjectsClient data={projects} />
    </div>
  );
}
