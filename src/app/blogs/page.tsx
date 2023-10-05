'use client'
import React from 'react';
import { motion } from "framer-motion";

const Blogs = () => {
  return (

    <div className = " justify-center items-center flex flex-col pt-4">

      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      />
  
    </div>
  );
}

export default Blogs;
