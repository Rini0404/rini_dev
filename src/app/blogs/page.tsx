import React from "react";
import { GET } from "../api/blogs/route";
import { BlogsArray } from "./blog-types";
import Blogs from "./client-blog";

const getAllBlogs = async () => {
  const response = await GET();
  const data = await response.json();
  return data;
};

type BlogsProps = {
  data: BlogsArray;
};

const BlogsPage: React.FC<BlogsProps> = async () => {

  const [blogs, setBlogs] = React.useState<BlogsArray>([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }
  , []);
  
  return (
    <div>
      <Blogs
        data={blogs}
      />
    </div>
  );
}

export default BlogsPage