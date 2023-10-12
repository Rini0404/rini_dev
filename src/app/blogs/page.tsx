import React from "react";
import GET_BLOGS from "../api/blogs/route";
import { BlogsArray } from "./blog-types";
import Blogs from "./client-blog";

const getAllBlogs = async () => {
  const response = await GET_BLOGS();
  const data = await response.json();
  return data;
};

type BlogsProps = {
  data: BlogsArray;
};

const BlogsPage: React.FC<BlogsProps> = async ({ data }) => {
  const blogs = await getAllBlogs();


  return (
    <div>
      <Blogs
        data={blogs}
      />
    </div>
  );
}

export default BlogsPage