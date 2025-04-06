// src/components/Services.js
import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      image: "/assets/images/service/bike-car-relocation.png",
      title: "Bike/Car Relocation",
      description:
        "Safe and secure transport for your vehicles, ensuring they arrive in perfect condition.",
      ctaText: "Secure Transport",
      link: "/services/bike-car-relocation",
    },
    {
      image: "/assets/images/service/home-relocation.png",
      title: "Home Relocation",
      description:
        "Hassle-free shifting for your home, with careful handling of all your belongings.",
      ctaText: "Learn More",
      link: "/services/home-relocation",
    },
    {
      image: "/assets/images/service/office-relocation.png",
      title: "Office Relocation",
      description:
        "Efficient moving for your business, minimizing downtime and ensuring a smooth transition.",
      ctaText: "Plan your Move",
      link: "/services/office-relocation",
    },
    {
      image: "/assets/images/service/storage-solutions.png",
      title: "Storage Solutions",
      description:
        "Secure storage for your belongings, with flexible options to suit your needs.",
      ctaText: "Store with Ease",
      link: "/services/storage-solutions",
    },
  ];
  return (
    <section className="relative py-12 ">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/service/service-wave-pattern.svg"
          alt="Wave Pattern"
          fill
          style={{ objectFit: "cover" }}
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
      </div>
    </section>
  );
}
