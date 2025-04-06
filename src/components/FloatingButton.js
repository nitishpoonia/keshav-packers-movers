// src/components/FloatingButton.js
"use client";

import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.button
      className="
        fixed bottom-4 right-4 
        text-white font-poppins font-poppinsSemiBold text-small 
        px-4 py-2 rounded-lg md:px-6 md:py-3 md:text-body
        cursor-pointer 
        shadow-[0_4px_8px_rgba(0,0,0,0)] 
        hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]
        z-50
      "
      initial={{
        scale: 1,
        background: "linear-gradient(to right, #FF5733, #FF9166)",
      }}
      animate={{
        scale: [1, 1.1, 1], // Pulsing effect
        background: [
          "linear-gradient(to right, #FF5733 0%, #FF9166 100%)",
          "linear-gradient(to right, #FF9166 0%, #FF5733 100%)",
          "linear-gradient(to right, #FF5733 0%, #FF9166 100%)",
        ], // Wave-like gradient movement
        transition: {
          scale: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          background: {
            duration: 5, // Slower wave movement
            repeat: Infinity,
            ease: "linear",
          },
        },
      }}
      whileHover={{
        scale: 1.05,
        background: "linear-gradient(to right, #FF9166, #FF5733)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      Get a Quote in 10 Mins
    </motion.button>
  );
}
