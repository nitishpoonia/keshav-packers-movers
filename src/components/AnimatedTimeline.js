// src/components/AnimatedTimeline.js
"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function AnimatedTimeline({ steps, scrollYProgress }) {
  // Define scale and opacity for each step based on scroll progress
  const scales = [
    useTransform(scrollYProgress, [0, 0.15], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.05, 0.2], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.1, 0.25], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.15, 0.3], [0, 1], { clamp: true }),
  ];

  const opacities = [
    useTransform(scrollYProgress, [0, 0.15], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.05, 0.2], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.1, 0.25], [0, 1], { clamp: true }),
    useTransform(scrollYProgress, [0.15, 0.3], [0, 1], { clamp: true }),
  ];

  // Add a spring effect for smoothness at the top level
  const scaleSpring0 = useSpring(scales[0], { stiffness: 100, damping: 30 });
  const scaleSpring1 = useSpring(scales[1], { stiffness: 100, damping: 30 });
  const scaleSpring2 = useSpring(scales[2], { stiffness: 100, damping: 30 });
  const scaleSpring3 = useSpring(scales[3], { stiffness: 100, damping: 30 });

  const opacitySpring0 = useSpring(opacities[0], {
    stiffness: 100,
    damping: 30,
  });
  const opacitySpring1 = useSpring(opacities[1], {
    stiffness: 100,
    damping: 30,
  });
  const opacitySpring2 = useSpring(opacities[2], {
    stiffness: 100,
    damping: 30,
  });
  const opacitySpring3 = useSpring(opacities[3], {
    stiffness: 100,
    damping: 30,
  });

  // Create arrays of springs for easy indexing
  const scaleSprings = [scaleSpring0, scaleSpring1, scaleSpring2, scaleSpring3];
  const opacitySprings = [
    opacitySpring0,
    opacitySpring1,
    opacitySpring2,
    opacitySpring3,
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          style={{ scale: scaleSprings[index], opacity: opacitySprings[index] }}
          className="bg-lightPeach rounded-[12px] p-6 sm:p-8 flex flex-col items-center text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
        >
          {/* Round Number (Icon) */}
          <motion.div
            style={{
              scale: scaleSprings[index],
              opacity: opacitySprings[index],
            }}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-poppins font-poppinsBold text-2xl"
          >
            {index + 1}
          </motion.div>

          {/* Step Content with Icon */}
          <div className="flex items-center mt-4">
            {/* Icon */}
            <motion.div
              style={{
                scale: scaleSprings[index],
                opacity: opacitySprings[index],
              }}
              className="mr-2"
            >
              <Image
                src={step.icon}
                alt={`${step.title} process icon for Keshav Packers and Movers moving timeline`}
                width={38}
                height={38}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-[24px] md:text-[28px] font-poppins font-poppinsBold text-textDark">
              {step.title}
            </h3>
          </div>

          {/* Description */}
          <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-textMedium leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
