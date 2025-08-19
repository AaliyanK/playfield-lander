"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

interface MobileMenuProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export default function MobileMenu({
  onOpenDemo,
  onOpenContact,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    smoothScrollTo(id);
  };

  const handleDemoClick = () => {
    setIsOpen(false);
    onOpenDemo?.();
  };

  const handleContactClick = () => {
    setIsOpen(false);
    onOpenContact?.();
  };

  const menuItems = [
    { id: "integrations", label: "Integrations" },
    { id: "security", label: "Security" },
    { id: "vision", label: "Vision" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-50"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="px-6 py-8">
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors w-full text-left"
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={handleContactClick}
                  >
                    Contact
                  </Button>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleDemoClick}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
