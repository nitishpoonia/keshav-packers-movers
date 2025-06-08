// src/components/GetQuoteButton.js
"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useContactForm } from "../context/ContactFormContext";
import Button from "./Button";

export default function GetQuoteButton({ scrollYProgress }) {
  const { openForm } = useContactForm();

  // Use the same scroll progress range as the last card (Step 4) for consistency
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0, 1], {
    clamp: true,
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1], {
    clamp: true,
  });

  // Add a spring effect for smoothness
  const scaleSpring = useSpring(scale, { stiffness: 100, damping: 30 });
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scale: scaleSpring, opacity: opacitySpring }}
      className="inline-block"
    >
      <Button
        title="Book A Free Call"
        onClick={openForm}
        className="text-[18px] sm:text-[18px] md:text-[20px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5"
      />
    </motion.div>
  );
}
