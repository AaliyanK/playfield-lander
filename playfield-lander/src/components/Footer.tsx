"use client";

import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <motion.footer
      className="bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Playfield Information */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-normal text-white">Playfield</span>
            <p className="mt-4 text-gray-300 max-w-md font-normal">
              Superintelligence for enterprise. Map your systems, generate
              interfaces, run securely.
            </p>
          </motion.div>

          {/* Middle Column - Product Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-normal text-gray-300 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#integrations"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer font-normal"
                  onClick={(e) => handleNavClick(e, "integrations")}
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer font-normal"
                  onClick={(e) => handleNavClick(e, "security")}
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer font-normal"
                  onClick={(e) => handleNavClick(e, "vision")}
                >
                  Vision
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Column - Company Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-normal text-gray-300 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer font-normal"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-normal"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-normal"
                >
                  Terms
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm font-normal">
            © 2024 Playfield. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
