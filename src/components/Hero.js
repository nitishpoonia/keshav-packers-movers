// src/components/Hero.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/assets/images/hero/hero1.png" },
    { image: "/assets/images/hero/hero2.png" },
    { image: "/assets/images/hero/hero3.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{ x: 0 }} // Slide in to the center
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={`Hero Slide ${currentSlide + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Text and Button Overlay */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 text-center text-white px-4">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] font-poppins font-poppinsBold drop-shadow-[2px_4px_6px_rgba(0,0,0,0.7)]">
          Fast. Safe. Reliable
        </h1>

        {/* Subheading */}
        <p className="text-[14px] sm:text-[16px] md:text-subheading lg:text-[24px] font-poppins font-poppinsRegular mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
          Moving <span className="text-primary">India</span> one home at a time
        </p>

        {/* Horizontal Line */}
        <div className="w-12 sm:w-14 md:w-16 h-1 bg-primary mx-auto mt-1 sm:mt-2" />

        {/* CTA Button */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <motion.button
            className="
             flex items-center space-x-2 
              text-white font-poppins font-poppinsBold text-lg 
              px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg 
              cursor-pointer 
              shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
              hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]
            "
            initial={{
              background: "linear-gradient(to right, #FF5733, #FF9166)",
            }}
            animate={{
              background: [
                "linear-gradient(to right, #FF5733 0%, #FF9166 100%)",
                "linear-gradient(to right, #FF9166 0%, #FF5733 100%)",
                "linear-gradient(to right, #FF5733 0%, #FF9166 100%)",
              ],
              transition: {
                background: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              },
            }}
            whileHover={{
              background: "linear-gradient(to right, #FF9166, #FF5733)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <span>Get A Free Quote Now</span>
            <Image
              src="/assets/icons/right-arrow.svg"
              alt="Left Arrow"
              width={24}
              height={24}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
