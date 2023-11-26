// MainContent.js
import React, { MutableRefObject } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { MoovingButton } from "../buttons/moovingButton";

// Define an interface for the component's props
interface MainContentProps {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
  mapContainer: MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  showMap,
  setShowMap,
  mapContainer,
  isInView,
}) => {
  return (
    <div
      className="text-color p-8 text-center space-y-4"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div
        style={{
          color: "#20C20E",
          fontSize: "20px",
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Hello, my name is Rini!").start();
          }}
        />
      </div>
      <p className="text-xlg mb-4">
        I am a Full Stack Web and Mobile Developer based in{" "}
        <button
          className="cursor-pointer pulsate-effect"
          onMouseEnter={() => setShowMap(true)}
          onMouseLeave={() => setShowMap(false)}
        >
          <span className="text-color">Orlando, FL</span>
        </button>
      </p>

      <div className="flex justify-center space-x-10 space-between">
        <MoovingButton text="Projects" link="/projects" />
        <MoovingButton text="Blogs" link="/blogs" />
      </div>
      {showMap && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          // Tailwind classes for responsive styling
          className="p-2 rounded overflow-hidden relative mx-auto mt-5 
          md:absolute md:mt-0 md:top-1/2 
          md:right-72
          md:transform md:-translate-x-1/2 md:-translate-y-1/2" // Adjust the translate values as needed
          style={{
            width: "300px",
            height: "300px",
          }}
        >
          <div ref={mapContainer} className="rounded-full w-full h-full"></div>
        </motion.div>
      )}
    </div>
  );
};

export default MainContent;
