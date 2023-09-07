import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3];

const links = [ "/blogs", "/projects", "/aboutMe", "/" ];

const names = [ "Blogs", "Projects", "About Me", "Home" ];

const emoji = [ "📝", "📁", "👨‍💻", "🏠" ]

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} links = {links[i]} names = {names[i]} emoji={emoji[i]} />
    ))}
  </motion.ul>
);

