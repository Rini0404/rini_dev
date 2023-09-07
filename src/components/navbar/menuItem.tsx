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
}

export const MenuItem: React.FC<MenuItemProps> = ({
  i,
  names,
  links,
  emoji,
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">
        <Link href={links} legacyBehavior>
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
        </Link>
      </div>
      <div className="text-placeholder">
        <Link href={links} legacyBehavior>
          {names}
        </Link>
      </div>
    </motion.li>
  );
};
