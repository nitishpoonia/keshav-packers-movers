// src/components/Services.js
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import ServicesCTA from "./ServicesCTA";

export default function Services() {
  const services = [
    {
      image: "/assets/images/service/bike-car-relocation.jpeg",
      title: "Bike/Car Relocation",
      description:
        "Ensure the safe and secure transport of your vehicles with our expert relocation services. We handle everything from bikes to cars, guaranteeing they arrive in perfect condition, no matter the distance.",
      ctaText: "Secure Transport",
      link: "/services/bike-car-relocation",
    },
    {
      image: "/assets/images/service/home-relocation.jpeg",
      title: "Home Relocation",
      description:
        "Experience hassle-free home shifting with our dedicated team. We provide careful handling of all your belongings, from furniture to fragile items, ensuring a smooth transition to your new home.",
      ctaText: "Learn More",
      link: "/services/home-relocation",
    },
    {
      image: "/assets/images/service/office-relocation.jpeg",
      title: "Office Relocation",
      description:
        "Relocate your business with minimal downtime. Our efficient moving services ensure a smooth transition for your office, handling equipment, furniture, and documents with care and precision.",
      ctaText: "Plan your Move",
      link: "/services/office-relocation",
    },
    {
      image: "/assets/images/service/packing-unpacking.jpeg", // New image path
      title: "Packing and Unpacking Services",
      description:
        "Let our professionals handle the packing and unpacking of your belongings. We use high-quality materials to ensure your items are safe during transit, saving you time and effort.",
      ctaText: "Pack with Care",
      link: "/services/storage-solutions",
    },
  ];
  return (
    <section className="relative py-12 ">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 top-0 h-[800px]">
        <Image
          className="w-full h-[250px]"
          src="/assets/images/service/service-wave-pattern.svg"
          alt="Wave Pattern"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-poppins font-poppinsBold text-white text-center">
          Everything That Can Be Moved, We Move
        </h2>

        {/* Description */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-white text-center mt-4 max-w-3xl mx-auto">
          At Keshav Packers and Movers, we offer a wide range of relocation and
          storage solutions tailored to your needs. Whether you&apos;re moving
          your home, office, or vehicle, our expert team ensures a seamless and
          stress-free experience with affordable pricing and exceptional care.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              link={service.link}
            />
          ))}
        </div>
        <ServicesCTA />
      </div>
    </section>
  );
}
