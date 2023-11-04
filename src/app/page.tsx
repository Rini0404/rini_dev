"use client";
import React, { useState, useRef, MutableRefObject } from "react";
import { motion, useInView } from "framer-motion";
import useMapboxMap from "../hooks/useMapboxMap";
import { MoovingButton } from "../components/buttons/moovingButton";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const mapContainer: MutableRefObject<null | HTMLDivElement> = useRef(null);

  const refMain = useRef(null);
  const isInView = useInView(refMain, { once: true });

  useMapboxMap(mapContainer, showMap, {
    accessToken:
      "pk.eyJ1IjoicmluaTA0MDQiLCJhIjoiY2xtNTdvMDkxMnJxbjNjbW5reTM4N3d0eiJ9.KKdcGsnFDNd6Vx1uErTgPg",
    style: "mapbox://styles/mapbox/dark-v10",
    initialCenter: [-95, 40],
    initialZoom: 3,
    targetCenter: [-81.3792, 28.5383],
    targetZoom: 10,
  });

  return (
    <div
      ref={refMain}
      className="flex items-center justify-center min-h-screen"
    >
      <div
        className="text-white p-8 text-center space-y-4 relative"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, my name is Rini!")
              // .pauseFor(90000)
              .start();
          }}
        />
        <p className="text-lg mb-4">
          I am a Full Stack Web and Mobile Developer based in{" "} {" "} {" "}{" "} {" "} {" "}
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
    </div>
  );
};

export default Home;
