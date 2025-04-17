"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Sample testimonial data with Indian names
const testimonials = [
  {
    name: "Amitabh Kapoor",
    quote:
      "Keshav Packers ensured a smooth move from Delhi to Pune. The team was professional, and all our belongings arrived safely. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ritu Mehra",
    quote:
      "Their bike relocation service was top-notch. My bike reached Bangalore in perfect condition, and the process was hassle-free.",
    rating: 5,
  },
  {
    name: "Kiran Yadav",
    quote:
      "The packing team was excellent! They handled our fragile items with care, and everything was delivered on time. Great service!",
    rating: 4.5,
  },
  {
    name: "Siddharth Malhotra",
    quote:
      "Our office move in Mumbai was seamless thanks to Keshav Packers. They worked efficiently and set up everything perfectly.",
    rating: 5,
  },
  {
    name: "Neha Arora",
    quote:
      "Moving our 2BHK home was a breeze with Keshav Packers. The team was punctual and took great care of our furniture.",
    rating: 5,
  },
  {
    name: "Vishal Thakur",
    quote:
      "I was impressed with their car transport service. My car arrived in Chennai without a scratch, and the team kept me updated throughout.",
    rating: 4.8,
  },
  {
    name: "Pooja Nair",
    quote:
      "The unpacking service was a lifesaver! They set up our new home in Hyderabad perfectly. I’d use them again for sure!",
    rating: 5,
  },
  {
    name: "Rahul Bose",
    quote:
      "Keshav Packers made our office relocation in Kolkata so easy. The staff was professional, and everything was handled with care.",
    rating: 4.7,
  },
];

// Duplicate testimonials for infinite loop (at least 2x to ensure seamless scrolling)
const testimonialsPerSet = {
  mobile: 1, // 1 testimonial on mobile
  desktop: 3, // 3 testimonials on desktop/tablet
};

const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Gallery({ rows }) {
  const imagesPerRowDesktop = 4; // 4 columns on desktop/tablet

  // State for the testimonials carousel
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // Detect if the device is mobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the number of testimonials per set based on device
  const testimonialsPerSetCurrent = isMobile
    ? testimonialsPerSet.mobile
    : testimonialsPerSet.desktop;

  // Calculate the number of sets
  const totalSets = Math.ceil(testimonials.length / testimonialsPerSetCurrent);

  // Auto-cycle through sets every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) =>
        prevIndex === totalSets - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds per set

    return () => clearInterval(interval); // Cleanup on unmount or pause
  }, [isPaused, totalSets]);

  // Pause cycling on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume cycling when not hovering
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Calculate the testimonials to display in the current set
  const startIndex = currentSetIndex * testimonialsPerSetCurrent;
  const currentTestimonials = duplicatedTestimonials.slice(
    startIndex,
    startIndex + testimonialsPerSetCurrent
  );

  return (
    <>
      {/* Gallery Section */}
      <section className="space-y-6">
        {rows.map((rowImages, rowIndex) => (
          <GalleryRow
            key={rowIndex}
            images={rowImages}
            imagesPerRowDesktop={imagesPerRowDesktop}
          />
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="mt-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
            What Our Customers Say
          </h2>
          <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-4 max-w-3xl mx-auto">
            Hear from our satisfied customers about their seamless relocation
            experiences with Keshav Packers and Movers across India.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex justify-center gap-4"
            key={currentSetIndex} // Use key to trigger animation on change
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-lightPeach border border-gray-200 shadow-md p-6 flex flex-col justify-between h-[300px] w-[280px] sm:w-[340px] flex-shrink-0"
              >
                <div>
                  <p className="text-[36px] font-bold text-textDark mb-2">&quot;</p>
                  <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mb-4">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium mb-2">
                    {testimonial.rating} ★★★★★
                  </p>
                  <h3 className="text-[16px] sm:text-[18px] font-poppins font-poppinsBold text-textDark">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Component for each row of images with animation
function GalleryRow({ images, imagesPerRowDesktop }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-[12px]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[12px] hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
      {/* Fill empty slots to maintain grid alignment */}
      {images.length < imagesPerRowDesktop &&
        Array.from({ length: imagesPerRowDesktop - images.length }).map(
          (_, index) => (
            <div key={`empty-${index}`} className="aspect-square"></div>
          )
        )}
    </motion.div>
  );
}
