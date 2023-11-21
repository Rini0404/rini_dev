"use client";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { motion, useInView } from "framer-motion";
import useMapboxMap from "../hooks/useMapboxMap";
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

  const [animateMainContent, setAnimateMainContent] = useState(false);
  const [animateTooling, setAnimateTooling] = useState(false);

  const refMainContent = useRef(null);
  const refTooling = useRef(null);

  // Function to observe an element
  const observeElement = (ref: React.MutableRefObject<null>, setAnimationState: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimationState(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this threshold according to your needs
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };

  // UseEffect for MainContent
  useEffect(() => {
    return observeElement(refMainContent, setAnimateMainContent);
  }, [refMainContent]);

  // UseEffect for Tooling
  useEffect(() => {
    return observeElement(refTooling, setAnimateTooling);
  }, [refTooling]);
  return (
    <div className="flex flex-col">
        <motion.div
        ref={refMainContent}
        className="flex items-center justify-center min-h-screen"
        initial="hidden"
        animate={animateMainContent ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <MainContent
          showMap={showMap}
          setShowMap={setShowMap}
          mapContainer={mapContainer}
          isInView={animateMainContent}
        />
      </motion.div>
      <motion.div
        ref={refTooling}
        className="flex items-center justify-center min-h-screen"
        initial="hidden"
        animate={animateTooling ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <Tooling
        didReset = { animateTooling }
        />
      </motion.div>
    </div>
  );
};
export default Home;