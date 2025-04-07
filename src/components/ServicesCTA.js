// src/components/ServicesCTA.js
"use client";

import { useContactForm } from "../context/ContactFormContext";
import Button from "./Button";

export default function ServicesCTA() {
  const { openForm } = useContactForm();

  return (
    <div className="flex justify-center mt-8">
      <Button
        title="Get a Quote Now"
        onClick={openForm}
        className="text-[16px] sm:text-[18px] md:text-[20px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5"
      />
    </div>
  );
}
