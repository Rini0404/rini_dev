import React, { MutableRefObject, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { MoovingButton } from "../buttons/moovingButton";
import DotGrid from "../gridEffect";
import ArrowSvg from "../arrow";

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
  const mainContentRef = useRef<HTMLDivElement>(null);

  const [mainContentSize, setMainContentSize] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (mainContentRef.current) {
      const rect = mainContentRef.current.getBoundingClientRect();
      setMainContentSize({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const basicTestVariants = {
    animate: {
      scale: [1, 1.5, 1], // Simple scale animation
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <DotGrid mainContentSize={mainContentSize} />
      <div ref={mainContentRef} className=" mb-36 md:mb-10 ">
        <div
          className="text-color p-4 text-center space-y-4"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div style={{ fontSize: "3.75rem"  }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rini.png"
              alt="Rini"
              className="rounded-full 
            border-4 border-color w-20 h-20 mx-auto
            md:w-40 md:h-40"
            />
            <h2 className="text-color text-2xl md:text-4xl font-bold custom-underline">
              Hello! I am <span className="highlight-name">Rini</span>.
            </h2>
            <h1>
              <span className="wave">✌🏾</span>
            </h1>
          </div>
          <p className="text-md md:text-xlg">
            I am a{" "}
            <span className="highlight-role">
              Full Stack Web and Mobile Developer
            </span>{" "}
            based in{" "}
            <button
              className="cursor-pointer pulsate-effect location-btn"
              onMouseEnter={() => setShowMap(true)}
              onMouseLeave={() => setShowMap(false)}
            >
              <span className="text-color">Orlando, FL</span>
            </button>
          </p>

          <div className="text-color text-xl md:text-2xl inline-typewriter">
            <span className="highlight-role">
              <Typewriter
                options={{
                  strings: [
                    "build",
                    "solve problems",
                    "learn",
                    "teach",
                    "code",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div className="flex justify-center space-x-5 space-between">
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
              className="p-2 overflow-hidden relative mx-auto mt-5 
                md:absolute md:mt-0 md:top-1/2 
                md:right-56
                md:transform md:-translate-x-1/2 md:-translate-y-1/2"
              style={{
                width: "250px",
                height: "250px",
              }}
            >
              <div ref={mapContainer} className="w-full h-full"></div>
            </motion.div>
          )}
        <div className="flex justify-center mt-5"
          style={{
            paddingTop: "100px",
          }}
        >
          <motion.div
            variants={basicTestVariants}
            animate="animate"
            className="arrow-icon"
          >
            <ArrowSvg />  
          </motion.div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
