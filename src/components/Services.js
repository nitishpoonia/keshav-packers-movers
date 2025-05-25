import Image from "next/image";
import ServiceCard from "./ServiceCard";
import ServicesCTA from "./ServicesCTA";

export default function Services() {
  const services = [
    {
      icon: "/assets/icons/truck-icon.svg",
      title: "Bike/Car Relocation",
      description:
        "Ensure the safe and secure transport of your vehicles with our expert relocation services. We handle everything from bikes to cars, guaranteeing they arrive in perfect condition, no matter the distance.",
      ctaText: "Secure Transport",
      link: "/services/bike-car-relocation",
    },
    {
      icon: "/assets/icons/home-icon.svg",
      title: "Home Relocation",
      description:
        "Experience hassle-free home shifting with our dedicated team. We provide careful handling of all your belongings, from furniture to fragile items, ensuring a smooth transition to your new home.",
      ctaText: "Learn More",
      link: "/services/home-relocation",
    },
    {
      icon: "/assets/icons/office-icon.svg",
      title: "Office Relocation",
      description:
        "Relocate your business with minimal downtime. Our efficient moving services ensure a smooth transition for your office, handling equipment, furniture, and documents with care and precision.",
      ctaText: "Plan your Move",
      link: "/services/office-relocation",
    },
    {
      icon: "/assets/icons/packing-icon.svg",
      title: "Packing and Unpacking Services",
      description:
        "Let our professionals handle the packing and unpacking of your belongings. We use high-quality materials to ensure your items are safe during transit, saving you time and effort.",
      ctaText: "Pack with Care",
      link: "/services/packing-unpacking", // Fixed link to match slug
    },
    {
      icon: "/assets/icons/storage-icon.svg",
      title: "Storage Solutions",
      description:
        "Need a safe place to store your belongings during your move? Our secure storage facilities ensure your items are protected, with flexible options to suit your needs.",
      ctaText: "Store Safely",
      link: "/services/storage-solutions",
    },
    {
      icon: "/assets/icons/globe-icon.svg",
      title: "International Relocation",
      description:
        "Moving abroad? We specialize in international relocation, handling customs clearance and secure transport to ensure your belongings reach your new home safely.",
      ctaText: "Move Globally",
      link: "/services/international-relocation",
    },
  ];

  return (
    <section className="relative py-12">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 top-0 h-[800px]">
        <Image
          className="w-full h-[250px]"
          src="/assets/images/service/service-wave-pattern.svg"
          alt="Decorative wave pattern background for Keshav Packers and Movers services section"
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
          storage solutions tailored to your needs. Whether you&apos;re moving your
          home, office, or vehicle, our expert team ensures a seamless and
          stress-free experience with affordable pricing and exceptional care.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
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
