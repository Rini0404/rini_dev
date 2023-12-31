"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectProps, Project } from "./project-types";
import Image from "next/image";
import TagsPills from "@/src/components/pills";
import ProjectModal from "@/src/components/projectModal";

type ProjectsClientProps = {
  data: ProjectProps;
};

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const ProjectsClient: React.FC<ProjectsClientProps> = ({ data }) => {

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
      marginTop: index % 4 === 2 ? "20px" : "20px", // If it's the second box in the row and a small box, add top margin,
    };
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<Project | null>(null);
  // Toggle modal visibility and set the content for the modal
  const handleCardClick = (project: Project) => {
    setModalContent(project);
    setShowModal(true);
  };

  const isMobile = isMobileDevice();

  const returnImgById = (id: number) => {
    switch (id) {
      case 3:
        return "/fish.png";
      case 6:
        return "/pcarch.png";
      case 5:
        return "/tfhand.png";
      case 4:
        return "/nkr.png";
      default:
        return "/1.png";
    }
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
          onClick={() => handleCardClick(project)}
          data-index={index}
          className={`border ${getBoxClass(
            index
          )} bg-slate-800 pulsate-box neon-border  `}
          initial={{ opacity: 0, y: -50 }}
          animate={elementIsVisible[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={getBoxStyle(index)}
          layoutId={`project-container-${project.id}`}
        >
          <div
            className="flex"
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column", // Stack children vertically
              justifyContent: "flex-start", // Align children to the start of the container
            }}
          >
            <Image
              src={returnImgById(project.id) || "default-thumbnail-url"}
              alt={project.name}
              layout="fill"
              quality={50}
              style={{
                width: "100%", // Take up all available horizontal space
                maxHeight: "50%", // Limit image height to top third of the container
                alignSelf: "center", // Center the image within the top third
              }}
            />
            <div
              className="modal-content bg-slate-800"
              style={{
                width: "100%",
                position: "absolute",
                height: "auto",
                bottom: "0",
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
                <TagsPills
                  tags={project.tags.split(",")}
                  className="flex flex-wrap p-3"
                />

                <div className="text-color flex flex-col gap-4 p-4">
                  <p>{project.name}</p>

                  <p>{project.shortDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {showModal && modalContent && (
          <ProjectModal
            key={modalContent.id} // Unique key for each project
            layoutId="unique-layout-id"
            project={modalContent}
            onClose={async () => {
              setShowModal(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsClient;
