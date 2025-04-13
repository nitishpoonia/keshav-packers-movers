// src/components/SpecialCard.js
"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import GetQuoteButton from "./GetQuoteButton";

export default function SpecialCard({ scrollYProgress }) {
  // Use a scroll progress range to animate the special card
  const scale = useTransform(scrollYProgress, [0.5, 0.7], [0, 1], {
    clamp: true,
  });
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1], {
    clamp: true,
  });

  // Add a spring effect for smoothness
  const scaleSpring = useSpring(scale, { stiffness: 100, damping: 30 });
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scale: scaleSpring, opacity: opacitySpring }}
      className="mt-8 max-w-md mx-auto bg-white rounded-[12px] p-6 flex flex-col items-center text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
    >
      <h3 className="text-subheading md:text-[22px] font-poppins font-poppinsBold text-textDark">
        Can't find what you were looking for?
      </h3>
      <div className="mt-4">
        <GetQuoteButton scrollYProgress={scrollYProgress} />
      </div>
    </motion.div>
  );
}
