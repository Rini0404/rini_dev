'use client'
// ClientBehavior.js
import React from 'react';

export default function ClientBehavior() {
  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      const xPos = e.clientX / window.innerWidth;
      const yPos = e.clientY / window.innerHeight;
      document.body.style.backgroundImage = `radial-gradient(circle closest-side at ${xPos * 100}% ${yPos * 100}%, rgba(255,255,255,0.2), rgba(12, 18, 35, 0.15))`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component does not render anything
}
