"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useContactForm } from "../context/ContactFormContext";
import Image from "next/image";

export default function FloatingButton() {
  const { openForm } = useContactForm();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click for desktop/tablet
  const handleDesktopClick = () => {
    openForm();
  };

  // Define the new contrasting gradient colors
  const gradientStart = "#3B82F6"; // Blue-500
  const gradientEnd = "#60A5FA"; // Blue-400

  return (
    <>
      {/* Desktop/Tablet Button (md and above) */}
      <motion.button
        className="
          hidden md:block 
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
          background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          background: [
            `linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 100%)`,
            `linear-gradient(to right, ${gradientEnd} 0%, ${gradientStart} 100%)`,
            `linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 100%)`,
          ],
          transition: {
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            background: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          },
        }}
        whileHover={{
          scale: 1.05,
          background: `linear-gradient(to right, ${gradientEnd}, ${gradientStart})`,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        onClick={handleDesktopClick}
      >
        Get a Quote in 10 Mins
      </motion.button>

      {/* Mobile Button (below md) */}
      <motion.a
        href="tel:+917852000465"
        className="
          block md:hidden 
          fixed bottom-4 right-4 
          w-14 h-14 rounded-full 
          flex items-center justify-center
          cursor-pointer 
          shadow-[0_4px_8px_rgba(0,0,0,0)] 
          hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]
          z-50
        "
        initial={{
          scale: 1,
          background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          background: [
            `linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 100%)`,
            `linear-gradient(to right, ${gradientEnd} 0%, ${gradientStart} 100%)`,
            `linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 100%)`,
          ],
          transition: {
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            background: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          },
        }}
        whileHover={{
          scale: 1.05,
          background: `linear-gradient(to right, ${gradientEnd}, ${gradientStart})`,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <Image
          src="/assets/icons/phone-icon.svg"
          alt="Phone icon - Call Keshav Packers and Movers for moving services"
          width={34}
          height={34}
          className="text-white"
        />
      </motion.a>
    </>
  );
}
