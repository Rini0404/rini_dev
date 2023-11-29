"use client";

import React, { useState, useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  key: string;
  transformX: number;
  transformY: number;
  targetTransformX: number;
  targetTransformY: number;
};

const DotGrid: React.FC<{ mainContentSize: { x: number; y: number; width: number; height: number } }> = ({
  mainContentSize,
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const dotSize = 10;
  const desiredCoverage = 150;
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const spacingX = Math.sqrt((screenWidth * screenHeight) / desiredCoverage) / dotSize;
    const spacingY = Math.sqrt((screenWidth * screenHeight) / desiredCoverage) / dotSize;

    const newDots: Dot[] = [];
    for (let x = 0; x < screenWidth; x += spacingX * dotSize) {
      for (let y = 0; y < screenHeight; y += spacingY * dotSize) {
        if (x >= mainContentSize.x && x <= mainContentSize.x + mainContentSize.width &&
            y >= mainContentSize.y && y <= mainContentSize.y + mainContentSize.height) {
          continue; // Skip dots within the main content
        }

        newDots.push({
          x: x,
          y: y,
          key: `${x}-${y}`,
          transformX: 0,
          transformY: 0,
          targetTransformX: 0,
          targetTransformY: 0,
        });
      }
    }
    setDots(newDots);
  }, [mainContentSize]);

  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.current = { x: event.clientX, y: event.clientY };
    setDots((prevDots) => {
      return prevDots.map((dot) => {
        const distanceX = mousePosition.current.x - dot.x;
        const distanceY = mousePosition.current.y - dot.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        const maxEffectDistance = 500; // Max distance for stretching effect
        let transformFactor = 1;
        if (distance < maxEffectDistance) {
          transformFactor = 1 - distance / maxEffectDistance;
        }

        return {
          ...dot,
          targetTransformX: distanceX * transformFactor,
          targetTransformY: distanceY * transformFactor,
        };
      });
    });
  };

  useEffect(() => {
    const updateDots = () => {
      setDots((prevDots) => {
        return prevDots.map((dot) => {
          // Gradually move dot transforms to their targets
          const transformX = dot.transformX + (dot.targetTransformX - dot.transformX) * 0.1;
          const transformY = dot.transformY + (dot.targetTransformY - dot.transformY) * 0.1;
          return {
            ...dot,
            transformX: transformX,
            transformY: transformY,
          };
        });
      });
      requestAnimationFrame(updateDots);
    };

    const animationFrameId = requestAnimationFrame(updateDots);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="background-main">
      {dots.map((dot) => (
        <div
          key={dot.key}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: "50%",
            transform: `translate(${dot.transformX}px, ${dot.transformY}px)`,
            transition: "transform 0.1s ease",
          }}
          className="dot bg-slate-800"
        />
        
      ))}
    </div>
  );
};

export default DotGrid;
