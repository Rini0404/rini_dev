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
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'block' // Show the element when it's open
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transitionEnd: {
      display: 'none' // Hide the element after the closing animation
    }
  },
};

export const Navigation = ({ closeWhenClicked, isOpen }: NavigationProps) => (
  <motion.ul
    variants={variants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
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
