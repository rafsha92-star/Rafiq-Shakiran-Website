'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BackgroundBeams() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-primary" />
      
      {/* Ambient gradient blobs */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-blue/10 blur-[120px]"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-purple/10 blur-[120px]"
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.5 }}
      />
      
      {/* Mouse follow glow */}
      <motion.div
        className="absolute rounded-full w-96 h-96 bg-accent-cyan/5 blur-[100px] hidden md:block"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </div>
  );
}
