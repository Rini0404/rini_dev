import { Project } from '@/src/app/projects/project-types';
import React from 'react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}



const ProjectModal = ({ project, onClose }: ProjectModalProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
  console.log(project)
  return (
    <div className="modal-overlay" onClick={onClose} ref = {ref}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Render the content here */}
        <h1>{project.name}</h1>
        <p>{project.shortDescription}</p> 
        {/* ...other content */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default  React.forwardRef(ProjectModal);
