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
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hello, my name is Rini!").start();
        }}
      />
      <p className="text-lg mb-4">
          I am a Full Stack Web and Mobile Developer based in{
          " "} {" "} {" "}{" "} {" "} {" "}
          <button
          className="cursor-pointer pulsate-effect"
          onMouseEnter={() => setShowMap(true)}
          onMouseLeave={() => setShowMap(false)}
        >
          Orlando, FL
        </button>
      </p>

      {showMap && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute p-2 rounded overflow-hidden"
          style={{
            width: "300px",
            height: "300px",
            top: "-130%",
            left: "100%",
          }}
        >
          <div
            ref={mapContainer}
            className="rounded-full absolute"
            style={{
              width: "100%",
              height: "100%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </motion.div>
      )}

      <div className="flex justify-center space-x-10 space-between">
        <MoovingButton text="About Me" link="/aboutMe" />
        <MoovingButton text="Projects" link="/projects" />
        <MoovingButton text="Blogs" link="/blogs" />
      </div>
    </div>
  );
};

export default MainContent;
