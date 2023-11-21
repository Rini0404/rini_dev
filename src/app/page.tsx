"use client";
import React, { useState, useRef, MutableRefObject } from "react";
import { motion, useInView } from "framer-motion";
import useMapboxMap from "../hooks/useMapboxMap";
import { MoovingButton } from "../components/buttons/moovingButton";
import Typewriter from "typewriter-effect";
import MainContent from "../components/mainContent";
import { Tooling } from "../components/tooling";

const Home: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const mapContainer: MutableRefObject<null | HTMLDivElement> = useRef(null);

  useMapboxMap(mapContainer, showMap, {
    accessToken:
      "pk.eyJ1IjoicmluaTA0MDQiLCJhIjoiY2xtNTdvMDkxMnJxbjNjbW5reTM4N3d0eiJ9.KKdcGsnFDNd6Vx1uErTgPg",
    style: "mapbox://styles/mapbox/dark-v10",
    initialCenter: [-95, 40],
    initialZoom: 3,
    targetCenter: [-81.3792, 28.5383],
    targetZoom: 10,
  });
  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 50 }
  };

  const refMainContent = useRef(null);
  const isInViewMainContent = useInView(refMainContent, { once: true });

  const refTooling = useRef(null);
  const isInViewTooling = useInView(refTooling, { once: true });

  return (
    <div className="flex flex-col">
      <motion.div
        ref={refMainContent}
        className="flex items-center justify-center min-h-screen"
        initial="hidden"
        animate={isInViewMainContent ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <MainContent
          showMap={showMap}
          setShowMap={setShowMap}
          mapContainer={mapContainer}
          isInView={isInViewMainContent}
        />
      </motion.div>
      <motion.div
        ref={refTooling}
        className="flex items-center justify-center min-h-screen"
        initial="hidden"
        animate={isInViewTooling ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <Tooling />
      </motion.div>
    </div>
  );
};
export default Home;