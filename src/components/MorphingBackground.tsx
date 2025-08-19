"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MorphingBackground() {
  const [currentShape, setCurrentShape] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % 4);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const shapes = [
    // Hexagon
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    // Diamond
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    // Star
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    // Circle
    "circle(50% at 50% 50%)",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Morphing shapes */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/30"
          animate={{
            clipPath: shapes[currentShape],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-400/20"
          animate={{
            clipPath: shapes[(currentShape + 2) % 4],
          }}
          transition={{
            duration: 2,
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 border border-blue-400/40 transform rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-blue-400/30 transform -rotate-12"
        animate={{
          rotate: [-12, 348, -12],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
