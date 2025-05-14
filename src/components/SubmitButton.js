"use client";

import React from "react";

/**
 * Reusable submit button with loading state
 */
export default function SubmitButton({
  text = "Submit",
  isLoading = false,
  loadingText = "Submitting...",
  type = "submit",
  onClick,
  className = "",
  fullWidth = true,
  variant = "gradient", // 'gradient' | 'solid' | 'outline'
}) {
  // Base styling for all buttons
  const baseClasses = `
    ${fullWidth ? "w-full" : ""} 
    font-poppins font-poppinsSemiBold 
    text-[14px] sm:text-[16px] 
    px-6 py-3 rounded-lg 
    cursor-pointer
    flex justify-center items-center
    transition-all duration-300
    ${isLoading ? "opacity-75 cursor-not-allowed" : ""}
  `;

  // Variant-specific styling
  const variantClasses = {
    gradient:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)] hover:scale-[1.02]",
    solid:
      "bg-primary text-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)] hover:bg-opacity-90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:bg-opacity-5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>{loadingText}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
