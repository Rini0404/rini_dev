


type Project = {
  id: number;  
  title: string;
  tags: string[];
  thumbnail: string;
  url: string;
  shortDescription?: string;
  description?: string;
} 

export const fakeProjects: Project[] = [
  {
    id: 1,
    title: 'Fish Kill Farms Map',
    tags: 'HTML, CSS, JavaScript, Mapbox'.split(',').map(tag => tag.trim()),
    thumbnail: '/fishkill_desk.png',
    url: 'https://www.fishkillfarms.com/map/',
    shortDescription: 'This is a short description of the project',
  },
  {
    id: 2,
    title: 'NCHMCE Prep Exam',
    tags: 'HTML, CSS, JavaScript, Mapbox'.split(',').map(tag => tag.trim()),
    thumbnail: '/fishkill_desk.png',
    url: 'https://www.fishkillfarms.com/map/',
  },
  {
    id: 2,
    title: 'NCHMCE Prep Exam',
    tags: 'HTML, CSS, JavaScript, Mapbox'.split(',').map(tag => tag.trim()),
    thumbnail: '/fishkill_desk.png',
    url: 'https://www.fishkillfarms.com/map/',
  },
  {
    id: 2,
    title: 'NCHMCE Prep Exam',
    tags: 'HTML, CSS, JavaScript, Mapbox'.split(',').map(tag => tag.trim()),
    thumbnail: '/fishkill_desk.png',
    url: 'https://www.fishkillfarms.com/map/',
  }
];

export type ProjectProps = {
  data: Project[];
}

