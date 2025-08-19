"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export default function Header({ onOpenDemo, onOpenContact }: HeaderProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xl font-bold text-white">Playfield</span>
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#integrations"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "integrations")}
            >
              Integrations
            </a>
            <a
              href="#security"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "security")}
            >
              Security
            </a>
            <a
              href="#vision"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "vision")}
            >
              Vision
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </motion.nav>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                onClick={onOpenContact}
              >
                Contact
              </Button>
              <Button
                size="sm"
                className="bg-blue-400 hover:bg-blue-500 text-black font-medium"
                onClick={onOpenDemo}
              >
                Get Started
              </Button>
            </div>
            <MobileMenu onOpenDemo={onOpenDemo} onOpenContact={onOpenContact} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
