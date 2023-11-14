import React from 'react';
import { Project } from '@/src/app/projects/project-types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <div className="modal-overlay" onClick={onClose} ref={ref}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Image container */}
        <div style={{ width: '300px', height: '400px', marginRight: '20px', marginLeft: '20px' }}>
          <img 
            src={project.thumbnail} 
            alt={project.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        {/* Text details container */}
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          {/* Render tags here, assuming tags is an array of strings */}
          {/* <div>{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</div> */}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default React.forwardRef(ProjectModal);
