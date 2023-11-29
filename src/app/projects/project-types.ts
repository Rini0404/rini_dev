export type Project = {
  id?: number;  
  name?: string;
  tags?: string;
  thumbnail?: string;
  url?: string;
  projectDetails?: ProjectDetails; // Optional details
}

export type ProjectDetails = {
  shortDesc?: string;
  description?: string;
  layoutId?: number;
}

export type ProjectProps = Project[]; // Array of Project objects
