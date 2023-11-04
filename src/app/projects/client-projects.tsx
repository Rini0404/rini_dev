"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectProps } from "./project-types";
import Image from "next/image";
const ProjectsClient: React.FC<ProjectProps> = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // This method shows the modal for the hovered element
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  // This method hides the modal when not hovered
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const [elementIsVisible, setElementIsVisible] = useState<{
    [key: string]: boolean;
  }>({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
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
    return isLarge ? "box-large" : "box-small";
  };

  // Calculate margin styles for each box based on its index
  const getBoxStyle = (index: number) => {
    return {
      marginBottom: "0px", // Space below each box
      marginRight: index % 2 === 0 ? "20px" : "0", // Space on the right for the first box in the pair
      marginTop: index % 4 === 2 ? "20px" : "20px", // If it's the second box in the row and a small box, add top margin
    };
  };

  return (
    <div
      className="projects-container"
      style={{ maxWidth: "900px", margin: "0 auto" }}
      ref={ref}
    >
      {data.map((project, index) => (
        <motion.div
          key={project.id}
          data-index={index}
          className={`border ${getBoxClass(index)} bg-slate-800`}
          initial={{ opacity: 0, y: -50 }}
          animate={elementIsVisible[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={getBoxStyle(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex bg-white"
            style={{ position: "relative", height: "100%", width: "100%" }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              quality={50}
            />
            {hoverIndex === index && (
              <div
                className="modal-content"
                style={{
                  width: "100%",
                  position: "absolute",
                  height: "40%",
                  bottom: "0",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#f1f1f1",
                }}
              >
                {/* Content of your modal */}

                <div
                  className="flex flex-col h-full"
                  style={{
                    // place both a the bottom of the modal
                    justifyContent: "flex-end",
                    // center the text
                    alignItems: "left",
                  }}
                >
                  <div className="flex flex-col gap-4 p-4">
                    <p>{project.title}</p>

                  <p>{project.shortDescription}</p>
                  </div>

                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsClient;
