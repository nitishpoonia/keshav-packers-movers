"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Sample testimonial data with Indian names
const testimonials = [
  {
    name: "Priya Sharma",
    quote:
      "Keshav Packers made our home relocation from Mumbai to Delhi so easy! Everything was handled with care, and we settled in quickly.",
    rating: 5,
  },
  {
    name: "Anil Kumar",
    quote:
      "I was worried about transporting my bike, but their team ensured it arrived in perfect condition. Highly recommend their bike relocation service!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    quote:
      "The packing and unpacking service saved us so much time. The team was professional and packed our fragile items with great care.",
    rating: 4.5,
  },
  {
    name: "Rohit Singh",
    quote:
      "Our office relocation in Bangalore was seamless with Keshav Packers. They minimized downtime, and we were back to work in no time!",
    rating: 5,
  },
  {
    name: "Meena Gupta",
    quote:
      "The movers were punctual and handled our 3BHK move with efficiency. The best moving experience we’ve had so far!",
    rating: 5,
  },
  {
    name: "Vikram Desai",
    quote:
      "I appreciated how they secured my car for transport. It arrived without a scratch, and the process was stress-free.",
    rating: 4.8,
  },
  {
    name: "Aarti Joshi",
    quote:
      "The team’s attention to detail during packing was impressive. They even helped us unpack and set up our new home. Great service!",
    rating: 5,
  },
  {
    name: "Suresh Rao",
    quote:
      "Relocating our office equipment was a breeze with Keshav Packers. Their team was professional and ensured everything was set up perfectly.",
    rating: 4.7,
  },
];

// Duplicate testimonials for infinite loop (at least 2x to ensure seamless scrolling)
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function Testimonials() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);
  const controls = useAnimation();

  // Calculate the total width of the carousel
  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth / 3; // Divided by 3 because we duplicated 3x
      setCarouselWidth(totalWidth);
    }

    // Start the auto-scroll animation
    const animate = async () => {
      await controls.start({
        x: -carouselWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust speed (lower = faster)
            ease: "linear",
          },
        },
      });
    };

    animate();
  }, [carouselWidth, controls]);

  // Pause animation on hover
  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: -carouselWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  };

  return (
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
          ref={carouselRef}
          className="flex gap-4"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-lightPeach border border-gray-200 shadow-md p-4 flex flex-col justify-between h-[200px] w-[280px] sm:w-[340px] flex-shrink-0"
            >
              <div>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-poppinsRegular text-textMedium mb-2">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div>
                <h3 className="text-[14px] sm:text-[16px] font-poppins font-poppinsBold text-textDark">
                  {testimonial.name}
                </h3>
                <p className="text-[12px] sm:text-[13px] font-poppins font-poppinsRegular text-textMedium">
                  {testimonial.rating} ★★★★★
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
