'use client';
import React, { useState, useEffect } from 'react';

const LuffyHand = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={'/3f076edce34a97ab1feb21be380d405e7a1d313c_00.jpg'}
      alt="Luffy's Hand"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)', // Adjust as needed
        transition: 'left 0.1s, top 0.1s ease' // Smooth movement
      }}
    />
  );
};

export default LuffyHand;
