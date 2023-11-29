

export type Project = {
  id: number;  
  name: string;
  tags: string;
  thumbnail: string;
  url: string;
  shortDesc?: string;
  description?: string;
  layoutId?: number;
} 

export type ProjectProps = Project[];