import React from "react";
import { BlogsArray } from "./blog-types";
import Blogs from "./client-blog";

const getAllProjects = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/blogs`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('console.log data: ', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }
};


type BlogsProps = {
  data: BlogsArray;
};

const BlogsPage: React.FC<BlogsProps> = async () => {
  const blogs = await getAllProjects();


  return (
    <div>
      <Blogs
        data={blogs}
      />
    </div>
  );
}

export default BlogsPage