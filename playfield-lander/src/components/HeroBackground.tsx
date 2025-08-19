"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 opacity-20">
        {/* Large Hexagon */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/30 transform rotate-12">
          <div className="w-full h-full border border-blue-400/20 transform rotate-45" />
        </div>

        {/* Floating Cubes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-400/40 transform rotate-45" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-blue-400/30 transform -rotate-12" />

        {/* Technical Grid */}
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 opacity-10">
          <div className="w-full h-full border border-blue-400/20" />
          <div className="absolute inset-0 border border-blue-400/10 transform rotate-45" />
        </div>
      </div>

      {/* Animated Data Points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <motion.path
          d="M 200 300 Q 400 200 600 300"
          stroke="rgb(59 130 246)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M 800 400 Q 1000 300 1200 400"
          stroke="rgb(59 130 246)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        <motion.path
          d="M 400 500 Q 600 400 800 500"
          stroke="rgb(59 130 246)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2 }}
        />
      </svg>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
    </div>
  );
}
