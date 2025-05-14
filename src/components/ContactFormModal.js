"use client";

import { useState } from "react";
import Image from "next/image";
import { useContactForm } from "@/context/ContactFormContext";

export default function ContactFormModal() {
  const { isFormOpen, closeForm } = useContactForm();

  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    phone: "",
    movingTime: "",
    serviceType: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSubmissionStatus(null);

    try {
      // Add your form submission logic here
      setSubmissionStatus("success");
      setFormData({
        fromCity: "",
        toCity: "",
        phone: "",
        movingTime: "",
        serviceType: "",
      });
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-textDark hover:text-primary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-6">
          <Image
            src="/assets/images/logo.png"
            alt="Keshav Packers and Movers Logo"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-subheading font-poppins font-poppinsBold text-textDark mb-4">
            Get a Free Quote
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* From City */}
            <div>
              <label
                htmlFor="fromCity"
                className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
              >
                From
              </label>
              <input
                type="text"
                id="fromCity"
                name="fromCity"
                value={formData.fromCity}
                onChange={handleInputChange}
                placeholder="Enter starting city"
                className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* To City */}
            <div>
              <label
                htmlFor="toCity"
                className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
              >
                To
              </label>
              <input
                type="text"
                id="toCity"
                name="toCity"
                value={formData.toCity}
                onChange={handleInputChange}
                placeholder="Enter destination city"
                className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] placeholder:text-textMedium text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Moving Time */}
            <div>
              <label
                htmlFor="movingTime"
                className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
              >
                When are you planning to move?
              </label>
              <select
                id="movingTime"
                name="movingTime"
                value={formData.movingTime}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select moving time</option>
                <option value="Within 1 Week">Within 1 Week</option>
                <option value="Within 2 Weeks">Within 2 Weeks</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="More than 1 Month">More than 1 Month</option>
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="serviceType"
                className="block text-[14px] md:text-[16px] font-poppins font-poppinsSemiBold text-textDark mb-1"
              >
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[13px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select service type</option>
                <option value="Home Relocation">Home Relocation</option>
                <option value="Bike/Car Relocation">Bike/Car Relocation</option>
                <option value="Office Relocation">Office Relocation</option>
                <option value="Storage Solutions">Storage Solutions</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Get Free Quote"}
            </button>

            {/* Status Messages */}
            {submissionStatus === "success" && (
              <p className="text-green-600 text-[14px] font-poppins font-poppinsRegular">
                Thank you! We&apos;ll contact you shortly.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-600 text-[14px] font-poppins font-poppinsRegular">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
