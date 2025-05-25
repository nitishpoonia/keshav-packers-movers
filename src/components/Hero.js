"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useContactForm } from "@/context/ContactFormContext";
import Image from "next/image";

// Statistics data
const stats = [
  { number: 5000, label: "Happy Customers" },
  { number: 10, label: "Years Experience" },
  { number: 100, label: "Cities Covered" },
];

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Animation variants for text and CTA
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Animation variants for stats
const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Animation variants for the truck
const truckVariants = {
  initial: { x: "100%" }, // Start off-screen to the right
  animate: {
    x: ["100%", "0%", "0%", "-100%", "-100%"], // Right -> Center -> Pause -> Left -> Reset Left
    scale: [1, 1.2, 1.2, 1, 1], // Scale up in center, then back to normal
    transition: {
      x: {
        times: [0, 0.2, 0.6, 0.8, 1], // Timing: 1.5s enter, 3s pause, 1.5s exit, 1.5s re-enter
        duration: 7.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
      scale: {
        times: [0, 0.2, 0.6, 0.8, 1], // Scale up when centered, down when moving
        duration: 7.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

export default function Hero() {
  const { openForm } = useContactForm();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center overflow-hidden py-4 md:mt-0 md:mb-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient"></div>

      {/* Animated Truck SVG */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center z-0"
        initial="initial"
        animate="animate"
        variants={truckVariants}
      >
        <Image
          src="/assets/illustrations/truck-custom.svg"
          alt="Professional moving truck illustration for Keshav Packers and Movers relocation services"
          width={400}
          height={200}
          className="animate-wheels"
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 px-4 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-poppinsBold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
          variants={itemVariants}
        >
          Fast. Safe. Reliable
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-poppins font-poppinsRegular drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          variants={itemVariants}
        >
          Moving <span className="text-contrast-blue">India</span> one home at a
          time
        </motion.p>

        {/* Horizontal Line */}
        <motion.div
          className="w-12 sm:w-14 md:w-16 h-1 bg-primary"
          variants={itemVariants}
        />

        {/* Statistics */}
        <motion.div
          ref={statsRef}
          className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={statVariants}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-poppins font-poppinsBold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    suffix="+"
                    delay={index * 0.5}
                  />
                ) : (
                  "0+"
                )}
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-poppins font-poppinsRegular drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="
            flex items-center space-x-2 
            text-white font-poppins font-poppinsBold text-lg 
            px-6 py-3 sm:px-8 sm:py-4 rounded-lg 
            shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
            hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]
          "
          onClick={openForm}
          variants={itemVariants}
          initial={{
            background: "linear-gradient(to right, #FFC107, #FF5722)",
          }}
          animate={{
            background: [
              "linear-gradient(to right, #FFC107 0%, #FF5722 100%)",
              "linear-gradient(to right, #FF5722 0%, #FFC107 100%)",
              "linear-gradient(to right, #FFC107 0%, #FF5722 100%)",
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
            background: "linear-gradient(to right, #FF5722, #FFC107)",
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <span>Get A Free Quote Now</span>
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="Right arrow icon for Get Free Quote button"
            width={24}
            height={24}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
