// src/components/ContactFormModal.js
"use client";

import { useEffect, useState } from "react";
import { useLocation } from "../context/LocationContext";
import { useContactForm } from "../context/ContactFormContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactFormModal() {
  const { city } = useLocation();
  const { isFormOpen, closeForm } = useContactForm();
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
    closeForm();
  };
  // Log state updates
  console.log("isFormOpen:", isFormOpen);
  console.log("city:", city);
  console.log("formData:", formData);
  console.log("isMovingTimeOpen:", isMovingTimeOpen);
  console.log("isServiceOpen:", isServiceOpen);

  // Set formData.from when city changes
  useEffect(() => {
    console.log("Setting formData.from to:", city || "");
    setFormData((prev) => ({ ...prev, from: city || "" }));
  }, [city]);
  if (!isFormOpen) return null;

  return (
    <motion.div
      key="modal"
      className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-lightPeach p-6 rounded-lg w-[90%] max-w-md relative"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Cross Icon */}
         <div className="absolute top-4 right-4 cursor-pointer">
          <button className="cursor-pointer" onClick={() => closeForm()}>
            <Image
              src="/assets/icons/cross.svg"
              alt="Close Form"
              width={24}
              height={24}
              className="hover:opacity-80"
            />
          </button>
        </div>

        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-primary text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          Get Your Quote Today
        </h2>


        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* From */}
          <div>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="From (e.g., Delhi)"
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsSemiBold text-textDark"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsSemiBold text-textDark"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsSemiBold text-textDark"
            />
          </div>

          {/* Moving Time Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMovingTimeOpen(!isMovingTimeOpen)}
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
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
                      setFormData((prev) => ({ ...prev, movingTime: option }));
                      setIsMovingTimeOpen(false);
                    }}
                    className="p-3 text-[13px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
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
              className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsSemiBold text-textDark flex justify-between items-center"
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
                    className="p-3 text-[13px] font-poppins font-poppinsSemiBold text-textDark hover:bg-gray-100 cursor-pointer"
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
            className="
              w-full bg-gradient-to-r from-primary to-secondary 
              text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] md:text-[18px] 
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg 
              cursor-pointer 
              shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
              hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]
            "
          >
            Book A Call
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
