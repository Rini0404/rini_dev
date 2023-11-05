import React from 'react';

interface TagsPillsProps {
  tags: string[];
  className?: string;
}

const TagsPills: React.FC<TagsPillsProps> = ({ tags, className }) => {
  return (
    <div className={`mt-2 flex flex-wrap ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 mr-2 mt-2 text-color rounded-full text-sm bg-teal-400/10"
        >
          {tag.trim()}
        </span>
      ))}
    </div>
  );
};

export default TagsPills;
