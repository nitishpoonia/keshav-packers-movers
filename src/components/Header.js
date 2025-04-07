// src/components/Header.js
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import useHeaderLogic from "../hooks/useHeaderLogic";
import { useLocation } from "../context/LocationContext";
import { useContactForm } from "@/context/ContactFormContext";

export default function Header() {
  const { city } = useLocation();
  const { isModalOpen, toggleModal } = useHeaderLogic();
  const { openForm } = useContactForm();
  return (
    <header className="bg-[#333] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <Link href="/">
          <h1 className="text-subheading font-poppins font-poppinsBold">
            Keshav Packers
          </h1>
        </Link>

        {/* Right Side: Button, City with Icon (Hidden on Mobile), Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Get a Quote Button */}
          <Button onClick={openForm} title="Get a Quote" />

          {/* City with Location Pin Icon (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-1">
            <Image
              src="/assets/icons/location-pin.svg"
              alt="Location Pin"
              width={24}
              height={24}
            />
            <span className="font-poppins font-poppinsSemiBold text-body">
              {city}
            </span>
          </div>

          {/* Custom Hamburger Menu */}
          <button
            onClick={toggleModal}
            className="relative w-8 h-8 focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[3px] bg-primary rounded"></span>
              <span className="block w-6 h-[3px] bg-primary rounded"></span>
              <span className="block w-6 h-[3px] bg-primary rounded"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-subheading font-poppins font-poppinsBold text-textDark">
              Navigation Menu
            </h2>
            <div className="flex items-center space-x-1 mt-2">
              <Image
                src="/assets/icons/location-pin.svg"
                alt="Location Pin"
                width={16}
                height={16}
              />
              <span className="font-poppins font-poppinsRegular text-body text-textDark">
                {city}
              </span>
            </div>
            <p className="text-body font-poppins font-poppinsRegular text-textMedium mt-2">
              Modal content will be added later.
            </p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-primary text-white font-poppins font-poppinsBold text-small px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
