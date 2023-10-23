'use client';
import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle, useInView } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: true });

  return (
    <div ref = { navRef } style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
      <motion.nav
        style={{ zIndex: 10 }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation 
          closeWhenClicked = {() => toggleOpen()}
        />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};