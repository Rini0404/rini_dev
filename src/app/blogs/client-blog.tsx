'use client'
import React from 'react';
import { motion } from "framer-motion";
import { BlogsArray } from "./blog-types"; // Make sure this path is correct!

type BlogsProps = {
  data: BlogsArray;
};

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div className="justify-center items-center flex flex-col pt-4">
      {data.map((blog) => (
        <motion.div
          key={blog.id} // Always provide a unique key when mapping in React
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <p className="text-2xl font-bold text-center">{blog.title}</p>
        </motion.div>
      ))}
    </div>
  );
}


export default Blogs;
