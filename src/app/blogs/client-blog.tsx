"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlogsArray } from "./blog-types";

type BlogsProps = {
  data: BlogsArray;
};

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center items-start pt-4 gap-4 px-4">
      {data.map((blog) => (
        <motion.div
          key={blog.id}
          style={{ borderColor: "rgba(0, 255, 170, 0.637)", borderWidth: "4px" }}
          className="box p-6 bg-slate-800 rounded-xl shadow-lg transition-all duration-200 flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 170, 0.637)" }}
          transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {/* Thumbnail */}
          <div className="flex-shrink-0 mr-4">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              style={{
                borderWidth: "1px",
                borderColor: "white",
                boxShadow: "0 4px 10px white"
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
              className="text-xl text-white"
            >
              {blog.title}
            </a>

            {/* Tags Pills */}
            <div className="mt-2 flex flex-wrap">
              {blog.tags
                .replace(/"/g, "")
                .split(",")
                .filter((tag) => tag.trim() !== "")
                .map((tag, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: "rgba(0, 255, 170, 0.637)" }}
                    className="px-2 py-1 mr-2 mt-2 text-white rounded-full text-sm"
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
