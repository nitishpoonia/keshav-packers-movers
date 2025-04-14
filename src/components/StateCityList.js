// src/components/StateCityList.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StateCityList({ statesAndCities }) {
  // State to manage which states are expanded
  const [expandedStates, setExpandedStates] = useState({});

  // Toggle state expansion
  const toggleState = (state) => {
    setExpandedStates((prev) => ({
      ...prev,
      [state]: !prev[state],
    }));
  };

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.keys(statesAndCities).map((state) => (
        <div key={state} className="border border-gray-600 rounded-lg">
          {/* State Header with Toggle */}
          <button
            onClick={() => toggleState(state)}
            className="w-full flex justify-between items-center p-3 bg-gray-700 rounded-t-lg hover:bg-gray-600 focus:outline-none"
            aria-expanded={expandedStates[state] || false}
            aria-controls={`cities-${state}`}
          >
            <span className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-primary">
              {state}
            </span>
            <span className="text-gray-300">
              {expandedStates[state] ? "−" : "+"}
            </span>
          </button>
          {/* Cities List (Expandable) */}
          <AnimatePresence>
            <motion.div
              id={`cities-${state}`}
              initial={{ height: "auto", opacity: 1 }} // Initially visible for SEO
              animate={{
                height: expandedStates[state] ? "auto" : 0,
                opacity: expandedStates[state] ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-gray-800 rounded-b-lg overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {statesAndCities[state].map((cityName) => (
                  <Link
                    key={cityName}
                    href={`/city/${cityName.toLowerCase()}`}
                    className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                  >
                    {cityName}
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
