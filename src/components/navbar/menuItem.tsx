import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  i: number;
  links: string;
  names: string;
  emoji: string;
  closeWhenClicked: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  i,
  names,
  links,
  emoji,
  closeWhenClicked,
}) => {
  return (
    <Link href={links} legacyBehavior>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={closeWhenClicked}
        style={{ cursor: 'pointer' }} // Ensures the entire li looks clickable
      >
        <div className="icon-placeholder">
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
        </div>
        <div className="text-placeholder text-color">
          <a>{names}</a>
        </div>
      </motion.li>
    </Link>
  );
};