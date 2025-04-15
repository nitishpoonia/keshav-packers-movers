"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import useHeaderLogic from "../hooks/useHeaderLogic";
import { useLocation } from "../context/LocationContext";
import { useContactForm } from "@/context/ContactFormContext";

export default function Header() {
  const { city } = useLocation();
  const { isModalOpen, toggleModal } = useHeaderLogic();
  const { openForm } = useContactForm();
  const pathname = usePathname();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  // Services dropdown links
  const servicesDropdownLinks = [
    { name: "Home Relocation", href: "/services/home-relocation" },
    { name: "Bike/Car Relocation", href: "/services/bike-car-relocation" },
    { name: "Office Relocation", href: "/services/office-relocation" },
    { name: "Storage Solutions", href: "/services/storage-solutions" },
  ];

  // Social media links (mirroring the footer)
  const socialMediaLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "/assets/icons/facebook-icon.svg",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "/assets/icons/twitter-icon.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/assets/icons/instagram-icon.svg",
    },
  ];

  return (
    <header className="bg-[#333] text-white p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <Link href="/">
          <h1 className="text-subheading font-poppins font-poppinsBold">
            Keshav Packers
          </h1>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                href={link.href}
                className={`text-[16px] font-poppins font-poppinsRegular hover:text-primary transition-colors ${
                  pathname === link.href
                    ? "text-primary font-poppinsBold"
                    : "text-gray-300"
                } ${link.hasDropdown ? "cursor-pointer" : ""}`}
                onMouseEnter={() =>
                  link.hasDropdown && setIsServicesDropdownOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setIsServicesDropdownOpen(false)
                }
              >
                {link.name}
              </Link>
              {/* Services Dropdown */}
              {link.hasDropdown && isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 bg-gray-700 rounded-lg shadow-lg py-2 w-48 transition-all duration-200"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {servicesDropdownLinks.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.name}
                      href={dropdownLink.href}
                      className={`block px-4 py-2 text-[14px] font-poppins font-poppinsRegular hover:bg-gray-600 hover:text-primary transition-colors ${
                        pathname === dropdownLink.href
                          ? "text-primary font-poppinsBold"
                          : "text-gray-300"
                      }`}
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Button, City with Icon, Hamburger Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Get a Quote Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Button onClick={openForm} title="Get a Quote" />
          </div>

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

          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            onClick={toggleModal}
            className="md:hidden relative w-8 h-8 focus:outline-none hamburger-menu"
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[3px] bg-primary rounded hamburger-bar"></span>
              <span className="block w-6 h-[3px] bg-primary rounded hamburger-bar"></span>
              <span className="block w-6 h-[3px] bg-primary rounded hamburger-bar"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Navigation Modal (Mobile) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
          <div className="bg-white w-full h-full p-6 overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={toggleModal}>
                <h2 className="text-subheading font-poppins font-poppinsBold text-textDark">
                  Keshav Packers
                </h2>
              </Link>
              <button
                onClick={toggleModal}
                className="text-textDark focus:outline-none"
                aria-label="Close navigation menu"
              >
                <Image
                  src="/assets/icons/cross.svg"
                  alt="Close Menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* Main Navigation Links */}
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={toggleModal}
                    className={`block text-[18px] font-poppins font-poppinsRegular hover:text-primary transition-colors ${
                      pathname === link.href
                        ? "text-primary font-poppinsBold"
                        : "text-textDark"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Services Submenu */}
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {servicesDropdownLinks.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.name}
                          href={dropdownLink.href}
                          onClick={toggleModal}
                          className={`block text-[16px] font-poppins font-poppinsRegular hover:text-primary transition-colors ${
                            pathname === dropdownLink.href
                              ? "text-primary font-poppinsBold"
                              : "text-textMedium"
                          }`}
                        >
                          {dropdownLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* City Display */}
            <div className="mt-6 flex items-center space-x-1">
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

            {/* Get a Quote Button */}
            <div className="mt-4">
              <Button
                onClick={() => {
                  openForm();
                  toggleModal();
                }}
                title="Get a Quote"
              />
            </div>

            {/* Social Media Links */}
            <div className="mt-6 border-t border-gray-300 pt-4">
              <h3 className="text-subheading font-poppins font-poppinsBold text-textDark mb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialMediaLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleModal}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      className="hover:opacity-80"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-4 border-t border-gray-300 pt-4">
              <h3 className="text-subheading font-poppins font-poppinsBold text-textDark mb-2">
                Contact Us
              </h3>
              <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium">
                Phone: +91 123-456-7890
              </p>
              <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium">
                Email: contact@keshavpackers.com
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
