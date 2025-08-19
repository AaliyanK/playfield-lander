"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function AmbientParticles() {
  const dots = useMemo(() => Array.from({ length: 36 }).map((_, i) => ({ i })), []);
  
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-25" viewBox="0 0 400 400">
        {dots.map(({ i }) => (
          <motion.circle
            key={i}
            cx={200 + Math.cos((i / 36) * Math.PI * 2) * 150}
            cy={200 + Math.sin((i / 36) * Math.PI * 2) * 150}
            r={2.5}
            fill="#3b82f6"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ 
              duration: 4 + (i % 5), 
              repeat: Infinity, 
              repeatType: "mirror", 
              ease: "easeInOut" 
            }}
          />
        ))}
      </svg>
    </div>
  );
}
