"use client";

import React from "react";
import Image from "next/image";

/**
 * Reusable form success message component
 */
export default function FormSuccess({
  title = "Thank You!",
  message = "Your request has been successfully submitted. We'll get back to you soon.",
  buttonText = "Close",
  onButtonClick,
  showButton = true,
  buttonVariant = "gradient",
}) {
  return (
    <div className="text-center py-4">
      {/* Success icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <Image
            src="/assets/icons/check.svg"
            alt="Success checkmark icon - Form submitted successfully to Keshav Packers and Movers"
            width={32}
            height={32}
            className="text-green-500"
            // Fallback SVG icon if image doesn't load
            onError={(e) => {
              e.currentTarget.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              `;
            }}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-subheading font-poppins font-poppinsBold text-textDark mb-4">
        {title}
      </h2>

      {/* Message */}
      <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mb-6">
        {message}
      </p>

      {/* Button (optional) */}
      {showButton && onButtonClick && (
        <button
          onClick={onButtonClick}
          className={`
            px-6 py-3 rounded-lg 
            font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px]
            ${
              buttonVariant === "gradient"
                ? "bg-gradient-to-r from-primary to-secondary text-white"
                : "bg-primary text-white"
            }
            shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
            hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]
            transition-all duration-300
          `}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
