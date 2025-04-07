// src/components/Button.js
"use client";

import { motion } from "framer-motion";

export default function Button({ onClick, title }) {
  return (
    <motion.button
      onClick={onClick}
      className="
        bg-gradient-to-r from-primary to-secondary 
        text-white font-poppins font-poppinsBold text-small 
        px-4 py-2 rounded-lg 
        cursor-pointer
        shadow-[0_4px_8px_rgba(0,0,0,0)] 
        hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]
      "
      initial={{
        scale: 1,
        background: "linear-gradient(to right, #FF5733, #FF9166)",
      }}
      whileHover={{
        scale: 1.05,
        background: "linear-gradient(to right, #FF9166, #FF5733)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      {title}
    </motion.button>
  );
}
