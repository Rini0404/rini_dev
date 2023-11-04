


type Project = {
  id: number;  
  // title: string;
  // tags: string;
  // thumbnail: string;
  // url: string;
} 

export const fakeProjects: Project[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },

];

export type ProjectProps = {
  data: Project[];
}

