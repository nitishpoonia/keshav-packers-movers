// src/components/EstimatedMovingCostsWrapper.js
"use client";

import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import EstimatedMovingCosts from "./EstimatedMovingCosts";

export default function EstimatedMovingCostsWrapper() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 10%"],
  });

  // Debug: Log scrollYProgress values
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("EstimatedMovingCosts scrollYProgress:", value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <EstimatedMovingCosts ref={sectionRef} scrollYProgress={scrollYProgress} />
  );
}
