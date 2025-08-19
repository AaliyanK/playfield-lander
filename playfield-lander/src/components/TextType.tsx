"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}: TextTypeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isTyping) {
      if (currentCharIndex < text[currentTextIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex - 1);
        }, typingSpeed / 2); // Faster deletion
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting current text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % text.length);
        setIsTyping(true);
      }
    }
  }, [
    currentCharIndex,
    currentTextIndex,
    isTyping,
    isDeleting,
    text,
    typingSpeed,
    pauseDuration,
  ]);

  const currentText = text[currentTextIndex];
  const displayedText = currentText.substring(0, currentCharIndex);

  return (
    <div className={`inline-block ${className}`}>
      <span className="text-lg md:text-xl text-gray-700">{displayedText}</span>
      {showCursor && (
        <AnimatePresence>
          <motion.span
            className="text-lg md:text-xl text-purple-600 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {cursorCharacter}
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}
