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

  // Generate a unique request number
  const generateRequestNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `REQ-${timestamp}-${random}`;
  };

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
      const requestNumber = generateRequestNumber();

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Only send the modal form data
          fromCity: formData.fromCity,
          toCity: formData.toCity,
          phone: formData.phone,
          movingTime: formData.movingTime,
          serviceType: formData.serviceType,
          subject: `Free Quote Request #${requestNumber}`,
          // Add request number for tracking
          requestNumber: requestNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send request");
      }

      setSubmissionStatus("success");
      setFormData({
        fromCity: "",
        toCity: "",
        phone: "",
        movingTime: "",
        serviceType: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
      setErrorMessage(
        error.message || "Failed to submit form. Please try again."
      );
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

        <div className="mb-6">
          <h2 className="text-subheading text-center text-2xl font-poppins font-poppinsBold text-textDark mb-4">
            Get a Free Quote
          </h2>

          {submissionStatus === "success" ? (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <svg
                  className="w-8 h-8 text-green-500 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="text-lg font-poppins font-poppinsBold text-green-800 mb-2">
                  Request Submitted Successfully!
                </h3>
                <p className="text-sm font-poppins font-poppinsRegular text-green-700">
                  Thank you for your quote request. Our team will contact you
                  within 24 hours with a detailed quote.
                </p>
              </div>
              <button
                onClick={closeForm}
                className="bg-primary text-white py-2 px-6 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
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
                  <option value="Bike/Car Relocation">
                    Bike/Car Relocation
                  </option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Storage Solutions">Storage Solutions</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-primary text-white py-3 rounded-lg font-poppins font-poppinsSemiBold hover:bg-primary/90 transition-colors disabled:opacity-50 flex justify-center items-center ${
                  isLoading ? "cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
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
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get Free Quote"
                )}
              </button>

              {/* Error Message */}
              {submissionStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-[14px] font-poppins font-poppinsRegular">
                    {errorMessage}
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
