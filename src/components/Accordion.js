// src/components/Accordion.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Accordion({ title, prices, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-[12px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center focus:outline-none"
      >
        <h3 className="text-subheading text-left md:text-[22px] font-poppins font-poppinsSemiBold text-textDark">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Expand/collapse arrow icon for service details"
            width={20}
            height={20}
          />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0">
              {prices ? (
                prices.map((price, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-t border-gray-200 first:border-t-0"
                  >
                    <span className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                      {price.distance}
                    </span>
                    <span className="text-[14px] sm:text-[16px] font-poppins font-poppinsBold text-textDark">
                      {price.cost}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                  {content}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
