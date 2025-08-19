"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function TiltCard({ children, delay = 0 }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-40, 40], [10, -10]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(x, [-40, 40], [-10, 10]), { stiffness: 220, damping: 20 });
  
  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { 
        x.set(0); 
        y.set(0); 
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="[perspective:1000px]"
    >
      {children}
    </motion.div>
  );
}
