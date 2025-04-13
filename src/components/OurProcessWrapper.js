// src/components/OurProcessWrapper.js
"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import OurProcess from "./OurProcess";

export default function OurProcessWrapper() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 50%"], // Start when the section is 80% from the top
  });

  return <OurProcess ref={sectionRef} scrollYProgress={scrollYProgress} />;
}
