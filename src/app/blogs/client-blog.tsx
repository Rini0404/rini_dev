"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlogsArray } from "./blog-types";

type BlogsProps = {
  data: BlogsArray;
};

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  console.log('Data: ', data)
  return (
    <div className="flex flex-col justify-center items-start pt-4 gap-4 px-4 w-3/5 mx-auto">
    {/* Your Personal Image, Name, and Date */}
    <div className="flex items-center gap-4 mb-8">
      <img src= {"https://miro.medium.com/v2/resize:fill:96:96/1*9aVMsOsEQ1-YIa5LS8EHTQ@2x.jpeg"}alt="Your Name" className="w-16 h-16 rounded-full " />
      <div>
        <h2 className="text-xl  text-color font-bold">Rene Ortega</h2>
      </div>
    </div>      
    {data.map((blog, index) => (
        <motion.div
          key={blog.id}
          className="w-full p-4 bg-slate-800 rounded-xl shadow-lg transition-all duration-200 flex items-center border-b border-slate-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, boxShadow: "0 2px 10px rgba(0, 255, 170, 0.637)" }}
          transition={{ duration: 1, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {/* Thumbnail */}
          <div className="flex-shrink-0 mr-4">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              style={{
                borderWidth: "0.5px",
                borderColor: "#B0B3B8",
                boxShadow: "0 2px 5px rgba(0, 255, 170, 0.637)",
              }}
              className="object-fit mx-auto"
            />
          </div>

          {/* Title and Tags */}
          <div className="flex-grow">
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-color"
            >
              {blog.title}
            </a>
            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <span className="text-sm">Rene Ortega</span> | <span className="text-xs"> 2023 </span>
            </div>
            {/* Tags Pills */}
            <div className="mt-2 flex flex-wrap">
              {blog.tags
                .replace(/"/g, "")
                .split(",")
                .filter((tag) => tag.trim() !== "")
                .map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 mr-2 mt-2 text-color rounded-full text-sm bg-teal-400/10"
                  >
                    {tag.trim()}
                  </span>
                ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Blogs;

