import React from "react";
import { Project } from "@/src/app/projects/project-types";
import TagsPills from "../pills";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = (
  { project, onClose }: ProjectModalProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  return (
    <div
      className="modal-overlay-big"
      onClick={onClose}
      ref={ref}
    >
      <div
        className="image-container"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={project.name}
          className="project-image"
        />
      </div>

      <div
      className="details-container"
      >
        <h2
        className="text-color"
        >{project.name}</h2>
        <p
          className="text-color project-description"
        >{project.description}</p>
        <TagsPills tags={project.tags.split(",")} />
      </div>
    </div>
  );
};

export default React.forwardRef(ProjectModal);
