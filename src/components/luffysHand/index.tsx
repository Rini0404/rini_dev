"use client";

import React, { useState, useEffect } from "react";

type Dot = {
  rotation: any;
  height: any;
  width: any;
  x: number;
  y: number;
  key: string;
  transformX: number;
  transformY: number;
};

type MainContentSize = { x: number; y: number; width: number; height: number };

// DotGrid component
const DotGrid: React.FC<{ mainContentSize: MainContentSize }> = ({
  mainContentSize,
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const dotSize = 10; // You can adjust this size if needed
  const desiredCoverage = 350; // Adjust this to your liking
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const spacingX =
      Math.sqrt((screenWidth * screenHeight) / desiredCoverage) / dotSize;
    const spacingY =
      Math.sqrt((screenWidth * screenHeight) / desiredCoverage) / dotSize;

    const newDots: Dot[] = [];
    for (let x = 0; x < screenWidth; x += spacingX * dotSize) {
      for (let y = 0; y < screenHeight; y += spacingY * dotSize) {
        // Check if the dot is within the main content box
        if (
          x >= mainContentSize.x &&
          x <= mainContentSize.x + mainContentSize.width &&
          y >= mainContentSize.y &&
          y <= mainContentSize.y + mainContentSize.height
        ) {
          continue; // Skip dots within the main content
        }

        newDots.push({
          x: x,
          y: y,
          key: `${x}-${y}`,
          transformX: 0,
          transformY: 0,
          height: undefined,
          width: undefined,
          rotation: undefined
        });
      }
    }
    setDots(newDots);
  }, [mainContentSize /* dependencies */]);

  const handleMouseMove = (event: MouseEvent) => {
    setDots(
      dots.map((dot) => {
        const distanceX = event.clientX - dot.x;
        const distanceY = event.clientY - dot.y;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        const angleToCursor =
          Math.atan2(distanceY, distanceX) * (180 / Math.PI); // Convert to degrees

        const maxStretchFactor = 5; // Maximum stretch factor
        const maxEffectDistance = 500; // Max distance for stretching effect

        let stretchFactor = 1;
        if (distance < maxEffectDistance) {
          stretchFactor +=
            (maxStretchFactor - 1) * (1 - distance / maxEffectDistance);
        }

        // Adjust the width for the stretch
        const newWidth = dotSize * stretchFactor;
        // Height remains the same to give a stretching effect
        const newHeight = dotSize;

        return {
          ...dot,
          width: newWidth,
          height: newHeight,
          rotation: angleToCursor,
        };
      })
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dots]);

  return (
    <div className=" background-main">
      {dots.map((dot) => (
        <div
          key={dot.key}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: `${dot.width}px`,
            height: `${dot.height}px`,
            borderRadius: "20%",
            transform: `rotate(${dot.rotation}deg)`,
            transition: "transform 0.1s ease, width 0.1s ease",
          }}
          className="bg-slate-800"
          />
      ))}
    </div>
  );
};

export default DotGrid;
