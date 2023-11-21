'use client';

import React, { useState, useEffect } from 'react';

type Position = {
  x: number;
  y: number;
};

const SnakeTrail: React.FC = () => {
  const [trail, setTrail] = useState<Position[]>([]);
  const trailLength = 10;

  useEffect(() => {
    setTrail(Array(trailLength).fill({ x: 0, y: 0 }));

    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) { // Throttle time in milliseconds
        setTrail((currentTrail) => [
          { x: e.clientX, y: e.clientY },
          ...currentTrail.slice(0, -1),
        ]);
        lastTime = now;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trail.map((segment, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            left: segment.x,
            top: segment.y,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.1s, top 0.1s ease',
            opacity: (1 - index / trailLength)
          }}
        />
      ))}
    </>
  );
};

export default SnakeTrail;
