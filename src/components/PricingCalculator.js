"use client";

import { useState } from "react";
import InlineContactForm from "./InlineContactForm";

export default function PricingCalculator({ pricingData, additionalServices }) {
  const [formData, setFormData] = useState({
    serviceType: "",
    distance: "",
    packing: false,
    unpacking: false,
    storage: false,
    insurance: false,
  });

  const [estimatedCost, setEstimatedCost] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const calculateCost = (e) => {
    e.preventDefault();

    // Find the base cost based on service type and distance
    const selectedService = pricingData.find(
      (item) => item.title === formData.serviceType
    );
    if (!selectedService || !formData.distance) {
      setEstimatedCost(null);
      return;
    }

    const selectedPrice = selectedService.prices.find(
      (price) => price.distance === formData.distance
    );
    if (!selectedPrice) {
      setEstimatedCost(null);
      return;
    }

    // Convert cost string (e.g., "₹7,000") to a number
    let baseCost = parseFloat(selectedPrice.cost.replace(/[^0-9.-]+/g, ""));

    // Add costs for additional services
    let additionalCost = 0;
    if (formData.packing) {
      // Assuming average packing cost of ₹3,500 (midpoint of ₹2,000 - ₹5,000)
      additionalCost += 3500;
    }
    if (formData.unpacking) {
      // Assuming average unpacking cost of ₹2,250 (midpoint of ₹1,500 - ₹3,000)
      additionalCost += 2250;
    }
    if (formData.storage) {
      // Assuming one month of storage (₹3,000)
      additionalCost += 3000;
    }
    if (formData.insurance) {
      // Assuming 1% of base cost as insurance (simplified)
      additionalCost += baseCost * 0.01;
    }

    const totalCost = baseCost + additionalCost;
    setEstimatedCost(
      totalCost.toLocaleString("en-IN", { style: "currency", currency: "INR" })
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[12px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] p-6">
      <form onSubmit={calculateCost} className="space-y-4">
        {/* Service Type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-50 shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select a Service</option>
            {pricingData.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        {/* Distance */}
        <div>
          <label
            htmlFor="distance"
            className="block text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-1"
          >
            Distance
          </label>
          <select
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-50 shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-[16px] font-poppins font-poppinsRegular text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select Distance</option>
            {pricingData[0].prices.map((price) => (
              <option key={price.distance} value={price.distance}>
                {price.distance}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Services (Checkboxes) */}
        <div>
          <h3 className="text-[18px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark mb-2">
            Additional Services
          </h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="packing"
                checked={formData.packing}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
                Packing Services (₹2,000 - ₹5,000)
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="unpacking"
                checked={formData.unpacking}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
                Unpacking Services (₹1,500 - ₹3,000)
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="storage"
                checked={formData.storage}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
                Storage Solutions (₹3,000/month)
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="insurance"
                checked={formData.insurance}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="text-[16px] font-poppins font-poppinsRegular text-textMedium">
                Insurance Coverage (1% of base cost)
              </span>
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
        >
          Calculate Cost
        </button>
      </form>

      {/* Estimated Cost Display */}
      {estimatedCost && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
          <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
            Estimated Cost: {estimatedCost}
          </h3>
          <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium mt-2">
            This is an estimate. Request a free quote for an accurate price.
          </p>
          <div className="flex justify-center mt-4">
            <InlineContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
