

export type Project = {
  id: number;  
  name: string;
  tags: string;
  thumbnail: string | null;
  url: string;
  shortDesc?: string;
  description?: string;
  layoutId?: number;
} 

export type ProjectProps = Project[];