'use client';
import React, { useState, useEffect } from "react";
import { BlogsArray } from "./blog-types";
import Blogs from "./client-blog";

const getAllBlogs = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/blogs`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogsArray>([]);

  useEffect(() => {
    getAllBlogs().then(setBlogs);
  }, []);

  return (
    <div>
      <Blogs data={blogs} />
    </div>
  );
}