"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Blog } from './blog-types';

type BlogsProps = {
  data: Blog[]
}

const BlogsList: React.FC <BlogsProps> = ({ data }) => {
  return(
    <>
    {data.map((blog) => (
        <a
          key={blog.id}
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read more about ${blog.title}`}
          className="w-full"
        >
          <motion.div
            className="p-4 bg-slate-800 rounded-xl shadow-lg flex flex-col md:flex-row items-center border-b border-slate-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 2px 10px rgba(0, 255, 170, 0.637)" }}
            transition={{ duration: 1 }}
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="object-fit mx-auto"
                style={{
                  borderWidth: "0.5px",
                  borderColor: "#B0B3B8",
                  boxShadow: "0 2px 5px rgba(0, 255, 170, 0.637)",
                }}
              />
            </div>

            {/* Title and Tags */}
            <div className="flex-grow">
              <span className="text-xl text-color">{blog.title}</span>
              <div className="mt-2 flex items-center gap-2 text-gray-500">
                <span className="text-sm">Rene Ortega</span> | <span className="text-xs">2023</span>
              </div>
              {/* Tags Pills */}
              <div className="mt-2 flex flex-wrap">
                {blog.tags.split(",").filter(tag => tag.trim() !== "").map((tag, index) => (
                  <span key={index} className="px-2 py-1 mr-2 mt-2 text-color rounded-full text-sm bg-teal-400/10">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </a>
      ))}
    </>
  )
}

export default BlogsList