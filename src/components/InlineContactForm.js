// src/components/InlineContactForm.js
"use client";

import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import Image from "next/image";

export default function InlineContactForm({}) {
  const { city } = useLocation();
  const [formData, setFormData] = useState({
    from: city || "",
    to: "",
    phone: "",
    movingTime: "",
    service: "",
  });
  const [isMovingTimeOpen, setIsMovingTimeOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  // Dropdown options (easily editable)
  const movingTimeOptions = [
    "Within 1 Week",
    "Within 2 Weeks",
    "Within 1 Month",
    "More than 1 Month",
  ];

  const serviceOptions = [
    "Bike/Car Relocation",
    "Home Relocation",
    "Office Relocation",
    "Storage Solutions",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <section className="relative bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark mb-8">
          Ready to Move? Get Your Free Quote Now!
        </h2>
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto bg-lightPeach p-6 sm:p-8 md:p-10 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* From */}
            <div>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="From (e.g., Delhi)"
                className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
              />
            </div>

            {/* To */}
            <div>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="To (e.g., Mumbai)"
                className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark"
              />
            </div>

            {/* Moving Time Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMovingTimeOpen(!isMovingTimeOpen)}
                className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
              >
                <span>{formData.movingTime || "Moving Time"}</span>
                <Image
                  src="/assets/icons/dropdown-arrow.svg"
                  alt="Dropdown Arrow"
                  width={16}
                  height={16}
                  className={`transform transition-transform duration-300 ${
                    isMovingTimeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMovingTimeOpen && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {movingTimeOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          movingTime: option,
                        }));
                        setIsMovingTimeOpen(false);
                      }}
                      className="p-3 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Select Service Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="w-full p-3 sm:p-4 md:p-5 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
              >
                <span>{formData.service || "Select Service"}</span>
                <Image
                  src="/assets/icons/dropdown-arrow.svg"
                  alt="Dropdown Arrow"
                  width={16}
                  height={16}
                  className={`transform transition-transform duration-300 ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServiceOpen && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {serviceOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: option }));
                        setIsServiceOpen(false);
                      }}
                      className="p-3 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[16px] sm:text-[18px] md:text-[20px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
            >
              Book A Free Call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
