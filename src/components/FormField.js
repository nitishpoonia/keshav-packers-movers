"use client";

import React from "react";
import Image from "next/image";

/**
 * Reusable form field component for inputs, selects, and textareas
 */
export default function FormField({
  type = "text",
  name,
  label,
  value = "",
  options = [],
  onChange,
  placeholder = "",
  required = false,
  error = null,
  className = "",
  disabled = false,
  rows = 4,
}) {
  // Base styling for all form elements
  const baseInputClasses = `
    w-full p-3 rounded-lg 
    bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] 
    placeholder:text-textMedium text-[13px] 
    font-poppins font-poppinsRegular text-textDark 
    focus:outline-none focus:ring-2 focus:ring-primary
    ${error ? "border-2 border-red-500" : ""}
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
  `;

  // Base styling for labels
  const labelClasses = `
    block text-[14px] md:text-[16px] 
    font-poppins font-poppinsSemiBold 
    text-textDark mb-1
  `;

  // Base styling for error messages
  const errorClasses = `
    text-red-500 text-[12px] mt-1 
    font-poppins font-poppinsRegular
  `;

  // Render appropriate field based on type
  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((option) => (
              <option
                key={option.value || option}
                value={option.value || option}
              >
                {option.label || option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            className={`${baseInputClasses} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        );

      case "tel":
        return (
          <input
            type="tel"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} ${className}`}
            pattern="[6-9][0-9]{9}"
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        );
    }
  };

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderField()}
      {error && (
        <p id={`${name}-error`} className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}
