import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  url: string;
};

export const GithubButton: React.FC<ButtonProps> = ({ url }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.2 }} 
      whileTap={{ scale: 0.8 }} 
      className="git-button neon-border text-color"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <a href={url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        {/* Icon container */}
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/github-mark-white.png" 
          alt="github"
          style={{ width: "20px", height: "20px", marginRight: '10px' }} // Added margin for spacing
        />
        {/* Text container */}
        <span>Source Code</span>
      </a>
    </motion.div>
  );
};
