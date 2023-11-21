import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";


type NavigationProps = {
  closeWhenClicked: () => void;
  isOpen: boolean;
};

const itemIds = [0, 1, 2, ]

const links = ["/", "/projects", "/blogs"];

const names = ["Home", "Projects", "Blogs"];

const emoji = ["🏠", "📁", "📝"];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    opacity: 1,
    visibility: 'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transitionEnd: {
      visibility: 'hidden',
    },
  },
};


export const Navigation = ({ closeWhenClicked, isOpen }: NavigationProps) => (
  <motion.ul
  variants={menuItemVariants}
  initial="closed"
  animate={isOpen ? "open" : "closed"} // Control the animation based on isOpen

  >
    {itemIds.map((i) => (
      <MenuItem
        i={i}
        key={i}
        closeWhenClicked={closeWhenClicked}
        links={links[i]}
        names={names[i]}
        emoji={emoji[i]}
      />
    ))}
    
  </motion.ul>
);
