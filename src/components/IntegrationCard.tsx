"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Presentation,
  Globe,
  HardDrive,
  Database,
  MessageSquare,
} from "lucide-react";

interface IntegrationCardProps {
  name: string;
  index: number;
}

export default function IntegrationCard({ name, index }: IntegrationCardProps) {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "word":
        return <FileText className="w-5 h-5" />;
      case "powerpoint":
        return <Presentation className="w-5 h-5" />;
      case "sharepoint":
        return <Globe className="w-5 h-5" />;
      case "onedrive":
        return <HardDrive className="w-5 h-5" />;
      case "sql":
        return <Database className="w-5 h-5" />;
      case "slack":
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Card Background */}
      <div className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* Icon Container */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center mb-3">
            <span className="text-gray-600">{getIcon(name)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <span className="text-sm font-normal text-black text-center block">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
