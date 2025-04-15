"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FAQItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [jsLoaded, setJsLoaded] = useState(false);

  useEffect(() => {
    setJsLoaded(true);
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 rounded-lg">
      {/* Question Header with Toggle */}
      <button
        onClick={toggleExpand}
        className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
          {question}
        </span>
        <Image
          src="/assets/icons/dropdown-arrow.svg"
          alt="Toggle Answer"
          width={16}
          height={16}
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Answer (Expandable) */}
      <div
        id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`faq-answer p-4 bg-white rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } ${jsLoaded ? "" : "max-h-[500px] opacity-100"}`}
      >
        <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium">
          {answer}
        </p>
      </div>
    </div>
  );
}
