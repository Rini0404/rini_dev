


export type Project = {
  id: number;  
  name: string;
  tags: string;
  thumbnail: string;
  url: string;
  shortDescription?: string;
  description?: string;
} 

export type ProjectProps = Project[];

