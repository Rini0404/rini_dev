

export type Project = {
  id: number;  
  name: string;
  tags: string;
  thumbnail: string | null;
  url: string;
  shortDesc?: string;
  description?: string;
  layoutId?: number;
  exampleLink? : string;
  appLink?: string;
  serverLink?: string;
} 

export type ProjectProps = Project[];