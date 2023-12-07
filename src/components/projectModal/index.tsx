import React from "react";
import { Project } from "@/src/app/projects/project-types";
import TagsPills from "../pills";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Slider } from "../slideButton";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  layoutId: string;
}

const ProjectModal = (
  { project, onClose, layoutId }: ProjectModalProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  const modalContentRef = React.useRef<HTMLDivElement>(null);

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


  const useSliderIf = (id: number) => {
    switch (id) {
      case 3:
        return true;
      case 6:
        return true;
      default:
        return false;
    }
  }

  return (
    <motion.div
      layoutId={layoutId}
      className="modal-overlay-big"
      // onClick={handleClickOutside}
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }} // This is your exit animation
    >
      <button
        className="close-button bg-teal-400/10 pulsate-box"
        onClick={onClose}
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          X
        </motion.div>
      </button>
      <div className="modal-content" ref={modalContentRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ returnImgById(project.id) || "/images/placeholder.png"}
          alt={project.name}
          className="project-image"
        />
      </div>

      <div className="details-container">
        <h2 className="text-color text-2xl">{project.name}</h2>
        <p className="text-color project-description">{project.description}</p>
        <TagsPills tags={project.tags.split(",")} />
        {useSliderIf(project.id) && (
          <div className="slider-container">
            <Slider
              link= { project.url }
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default React.forwardRef(ProjectModal);
