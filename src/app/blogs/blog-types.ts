export type Blog = {
  id?: number;  
  title?: string;
  tags?: string;
  thumbnail?: string;
  url?: string;
  blogDetails?: BlogDetails; // Optional details
}

export type BlogDetails = {
  summary?: string;
  publishedDate?: string;
  // Add other optional properties here
}

export type BlogsArray = Blog[]; // Array of Blog objects
