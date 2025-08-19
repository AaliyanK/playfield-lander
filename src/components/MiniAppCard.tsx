"use client";

import { useEffect } from "react";
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MiniAppCardProps {
  title: string;
  desc: string;
  i: number;
}

export default function MiniAppCard({ title, desc, i }: MiniAppCardProps) {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" } 
    });
  }, [controls, i]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-30, 30], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-30, 30], [-8, 8]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => {
        x.set(0); 
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 16 }}
      animate={controls}
      className="group relative rounded-2xl border border-gray-700 bg-gray-900/50 p-4 backdrop-blur hover:bg-gray-800/50"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 shrink-0 rounded-xl bg-blue-500/20 ring-1 ring-gray-600" />
        <div>
          <div className="text-sm font-medium text-white">{title}</div>
          <div className="mt-1 text-xs text-gray-300">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}
