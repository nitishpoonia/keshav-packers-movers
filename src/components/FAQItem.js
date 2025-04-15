"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FAQItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mb-4 bg-white rounded-[12px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
      {/* Question Header with Toggle */}
      <button
        onClick={toggleExpand}
        className="w-full p-4 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-300"
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <h3 className="text-subheading text-left md:text-[22px] font-poppins font-poppinsSemiBold text-textDark">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Toggle Answer"
            width={20}
            height={20}
          />
        </motion.div>
      </button>
      {/* Answer (Expandable) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0">
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
