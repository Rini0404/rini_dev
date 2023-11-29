/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactMe from "../contactMe";
import { motion } from "framer-motion";

export const AboutMe: React.FC = () => {
  // Define your animation variants


  const downVariant = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.2 },
    },
  };

  return (
    <>
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={downVariant} 
          className="flex flex-col w-3/4 sm:w-2/3 md:w-1/2 h-full rounded-lg shadow-lg tooling-border text-color p-8">
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={downVariant}
          className="flex flex-1"
        >
          {/* Text container */}
          <div
            // make this 50% of the width of the parent container
            className="w-1/2"
            style={{
              paddingLeft: "0.5rem",
            }}
          >
            <h1 className="text-4xl md:text-2xl font-bold mb-4">
              About Me <span className="wave">👋🏾</span>
            </h1>
            {/* Shortened about me paragraphs */}
            <p className="text-lg md:text-xl mb-4">
              <span className="highlight-role">
                From construction sites to coding bytes
              </span>
              , my journey has been nothing short of transformative. After four
              resilient years in construction, I switched gears, fueled by a
              passion for technology and innovation.
            </p>
            <p className="text-lg md:text-xl mb-4">
              Now at a fast-paced startup, I wear multiple hats –{" "}
              <span className="highlight-role">
                I'm deploying apps, leading sprints, nurturing features, and
                guiding our next-gen coders.
              </span>{" "}
              My code doesn't just function; it tells a story of{" "}
              <span className="highlight-role">growth</span>,
              <span className="highlight-role">dedication</span>, and{" "}
              <span className="highlight-role">
                the relentless pursuit for excellence
              </span>
              .
            </p>
            <p className="text-lg md:text-xl mb-4">
              Nowadays I love to write about what I've learned, playing Pokemon
              Go and 3D print stuff!
            </p>
          </div>

          {/* Image container */}
          <motion.div
          viewport={{ once: false, amount: 0.8 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          variants={downVariant}
          transition={{ delay: 0.5 }}
          className="w-1/2 flex justify-center items-center">
            <img
              src="/ice.jpg"
              alt="Rini"
              className="rounded-full border-4 w-80"
              style={{ borderColor: "rgba(0, 255, 170, 0.637)" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          variants={downVariant}
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          className="h-full rounded-lg shadow-lg tooling-border text-color p-12"
        >
          <ContactMe />
        </motion.div>
      </motion.div>
    </>
  );
};
