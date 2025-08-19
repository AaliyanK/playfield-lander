"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  color: string;
}

export default function ValueCard({
  title,
  description,
  icon: Icon,
  index,
}: ValueCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background Card */}
      <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
        {/* Icon Container */}
        <div className="relative mb-4">
          <div className="w-10 h-10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-normal text-black mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
