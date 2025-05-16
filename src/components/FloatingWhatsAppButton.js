"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants for pulsing effect
const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      scale: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export default function FloatingWhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50 group"
      variants={pulseVariants}
      animate="animate"
    >
      <Link
        href="https://wa.me/+917852000465?text=Hello,%20I’d%20like%20to%20inquire%20about%20your%20moving%20services!"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16 
          bg-gradient-to-r from-green-500 to-green-700 
          rounded-full shadow-lg 
          hover:shadow-xl 
          transition-all duration-300
        "
        style={{
          background: "linear-gradient(to right, #25D366, #128C7E)",
        }}
        animate={{
          background: [
            "linear-gradient(to right, #25D366 0%, #128C7E 100%)",
            "linear-gradient(to right, #128C7E 0%, #25D366 100%)",
            "linear-gradient(to right, #25D366 0%, #128C7E 100%)",
          ],
          transition: {
            background: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          },
        }}
      >
        <Image
          src="/assets/icons/whatsapp-icon.svg"
          alt="Chat on WhatsApp"
          width={32}
          height={32}
          className="sm:w-10 sm:h-10"
        />
      </Link>

      {/* Hover Label (Visible on Desktop/Tablet) */}
      <span
        className="
        absolute left-full ml-2 px-3 py-1 
        bg-green-600 text-white text-sm font-poppins font-poppinsRegular 
        rounded-lg shadow-lg 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 
        hidden sm:block
      "
      >
        Chat on WhatsApp
      </span>
    </motion.div>
  );
}
