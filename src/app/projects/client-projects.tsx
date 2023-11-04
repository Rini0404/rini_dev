"use client"



import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectProps } from "./project-types";

const ProjectsClient: React.FC<ProjectProps> = ({ data }) => {
  const [elementIsVisible, setElementIsVisible] = useState<{[key: string]: boolean}>({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index) {
              setElementIsVisible((prev) => ({ ...prev, [index]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    if (ref.current) {
      const children = Array.from(ref.current.children);
      children.forEach((child) => {
        observer.observe(child as Element);
      });
    }

    return () => observer.disconnect();
  }, []);

  // Calculate whether the box should be large based on its index
  const getBoxClass = (index: number) => {
    const isLarge = index % 4 === 0 || index % 4 === 3;
    return isLarge ? 'box-large' : 'box-small';
  };

  // Calculate margin styles for each box based on its index
  const getBoxStyle = (index: number) => {
    return {
      marginBottom: '0px', // Space below each box
      marginRight: index % 2 === 0 ? '20px' : '0', // Space on the right for the first box in the pair
      marginTop: index % 4 === 2 ? '20px' : '20px', // If it's the second box in the row and a small box, add top margin
    };
  };
  

  return (
    <div className="projects-container" style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
      {data.map((project, index) => (
        <motion.div
          key={project.id}
          data-index={index} // Use to identify the box in the Intersection Observer
          className={`border bg-white ${getBoxClass(index)}`}
          initial={{ opacity: 0, y: -50 }}
          animate={elementIsVisible[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={getBoxStyle(index)}
        >
          Box {project.id}
        </motion.div>
      ))}
    </div>
  );
};


export default ProjectsClient;
