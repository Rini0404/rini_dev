import React from "react";
import { GET } from "../api/blogs/route";
import { BlogsArray } from "./blog-types";
import Blogs from "./client-blog";


const BlogsPage: React.FC<BlogsProps> =  async ({
  params,
  searchParams,
}: {
  params: { [key: string]: any };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

    const response = await GET();
    const data = await response.json();

  return (
    <div>
      <Blogs data={data} />
    </div>
  );
}

export default BlogsPage;
