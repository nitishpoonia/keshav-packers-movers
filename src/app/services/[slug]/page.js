import Image from "next/image";
import InlineContactForm from "@/components/InlineContactForm";
import Link from "next/link";

// Service data
const serviceData = {
  "home-relocation": {
    title: "Home Relocation Services",
    tagline: "Hassle-Free Home Shifting with Expert Care",
    image: "/assets/images/service/home-relocation-hero.jpg",
    content: [
      {
        heading: "Why Choose Us for Home Relocation?",
        description:
          "At Keshav Packers and Movers, we specialize in hassle-free home shifting across India. Our dedicated team ensures careful handling of all your belongings, from furniture to fragile items, guaranteeing a smooth transition to your new home. We use high-quality packing materials and modern techniques to protect your possessions during transit.",
      },
      {
        heading: "Our Home Relocation Process",
        description:
          "Our process starts with a free quote tailored to your needs. We then schedule your move at a convenient time, pack your belongings with care, transport them securely, and unpack at your new location. We aim to make your move stress-free and efficient, minimizing disruption to your daily routine.",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Enjoy affordable pricing, transparent quotes, and exceptional customer support. We offer insurance options for added peace of mind and flexible scheduling to fit your timeline. Whether you're moving locally or long-distance, we've got you covered with professional home relocation services.",
      },
    ],
    meta: {
      title: "Home Relocation Services | Keshav Packers and Movers",
      description:
        "Experience hassle-free home relocation with Keshav Packers and Movers. We offer expert shifting services across India with careful handling and affordable pricing.",
      keywords:
        "home relocation, house shifting, packers and movers, home moving services, affordable home relocation India",
    },
  },
  "bike-car-relocation": {
    title: "Bike/Car Relocation Services",
    tagline: "Safe and Secure Vehicle Transport Across India",
    image: "/assets/images/gallery/move-76.jpeg",
    content: [
      {
        heading: "Why Choose Us for Bike/Car Relocation?",
        description:
          "We provide safe and secure transport for your bikes and cars, ensuring they arrive in perfect condition. Our expert team uses specialized equipment and secure loading techniques to protect your vehicle during transit, no matter the distance.",
      },
      {
        heading: "Our Bike/Car Relocation Process",
        description:
          "After requesting a free quote, we schedule your vehicle pickup at a time that suits you. We inspect and securely load your bike or car, transport it to the destination, and ensure safe delivery. We keep you updated throughout the process for peace of mind.",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our vehicle relocation service offers competitive pricing, real-time tracking, and insurance coverage. We handle both bikes and cars, providing door-to-door service across India. Trust us to deliver your vehicle safely and on time.",
      },
    ],
    meta: {
      title: "Bike/Car Relocation Services | Keshav Packers and Movers",
      description:
        "Safe and secure bike and car relocation services across India with Keshav Packers and Movers. Get competitive pricing and reliable transport for your vehicles.",
      keywords:
        "bike relocation, car relocation, vehicle transport, packers and movers, secure vehicle relocation India",
    },
  },
  "office-relocation": {
    title: "Office Relocation Services",
    tagline: "Efficient Office Moves with Minimal Downtime",
    image: "/assets/images/gallery/move-76.jpeg",
    content: [
      {
        heading: "Why Choose Us for Office Relocation?",
        description:
          "Relocate your business with minimal downtime using our efficient office moving services. We handle everything from office equipment to sensitive documents, ensuring a smooth transition with precision and care.",
      },
      {
        heading: "Our Office Relocation Process",
        description:
          "We start with a free quote and a detailed relocation plan tailored to your business needs. Our team packs and labels all items, transports them securely, and unpacks at your new office, minimizing disruption to your operations.",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our office relocation service offers fast, reliable moves with affordable pricing. We provide insurance options, flexible scheduling, and dedicated support to ensure your business is up and running quickly at the new location.",
      },
    ],
    meta: {
      title: "Office Relocation Services | Keshav Packers and Movers",
      description:
        "Efficient office relocation services with minimal downtime by Keshav Packers and Movers. Move your business seamlessly across India with expert care.",
      keywords:
        "office relocation, business moving, packers and movers, office shifting services, efficient office relocation India",
    },
  },
  "packing-unpacking": {
    title: "Packing and Unpacking Services",
    tagline: "Professional Packing for a Stress-Free Move",
    image: "/assets/images/service/packing-unpacking-hero.jpg",
    content: [
      {
        heading: "Why Choose Our Packing and Unpacking Services?",
        description:
          "Let our professionals take the stress out of moving with expert packing and unpacking services. We use high-quality materials to ensure your belongings are safe during transit, handling everything from fragile items to heavy furniture.",
      },
      {
        heading: "Our Packing and Unpacking Process",
        description:
          "We begin with a free quote and a packing plan tailored to your needs. Our team carefully packs your items using the best materials, transports them securely, and unpacks everything at your new location, saving you time and effort.",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our packing and unpacking services are affordable, efficient, and designed to make your move seamless. We offer flexible scheduling, careful handling, and optional insurance for added peace of mind, ensuring your belongings are protected every step of the way.",
      },
    ],
    meta: {
      title: "Packing and Unpacking Services | Keshav Packers and Movers",
      description:
        "Professional packing and unpacking services by Keshav Packers and Movers. Ensure a stress-free move with expert care and high-quality materials across India.",
      keywords:
        "packing services, unpacking services, packers and movers, professional packing, stress-free moving India",
    },
  },
  "storage-solutions": {
    title: "Storage Solutions",
    tagline: "Secure and Flexible Storage for Your Belongings",
    image: "/assets/images/service/storage-solutions-hero.jpg",
    content: [
      {
        heading: "Why Choose Our Storage Solutions?",
        description:
          "We offer secure, climate-controlled storage options for your belongings, whether you need short-term or long-term solutions. Our facilities are equipped with advanced security systems to keep your items safe.",
      },
      {
        heading: "Our Storage Process",
        description:
          "Request a storage quote, and we'll help you choose the right plan. We pack and transport your items to our facility, store them securely, and deliver them back when you're ready. It's that simple!",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our storage solutions are flexible, affordable, and tailored to your needs. We provide 24/7 monitoring, easy access to your items, and competitive pricing, making storage hassle-free and convenient.",
      },
    ],
    meta: {
      title: "Storage Solutions | Keshav Packers and Movers",
      description:
        "Secure and flexible storage solutions with Keshav Packers and Movers. Store your belongings safely with climate-controlled options across India.",
      keywords:
        "storage solutions, secure storage, packers and movers, climate-controlled storage, storage services India",
    },
  },
  "international-relocation": {
    title: "International Relocation Services",
    tagline: "Seamless Moves Across Borders",
    image: "/assets/images/service/international-relocation-hero.jpg",
    content: [
      {
        heading: "Why Choose Us for International Relocation?",
        description:
          "Moving abroad? We specialize in international relocation, ensuring your belongings reach your new home safely. Our team handles customs clearance, documentation, and secure transport with expertise and care.",
      },
      {
        heading: "Our International Relocation Process",
        description:
          "We start with a free quote and a detailed plan for your international move. Our team packs your items securely, manages all customs and documentation requirements, and ensures safe delivery to your destination, keeping you informed at every step.",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our international relocation services offer competitive pricing, expert customs handling, and reliable transport. We provide insurance options, real-time tracking, and dedicated support to make your global move smooth and stress-free.",
      },
    ],
    meta: {
      title: "International Relocation Services | Keshav Packers and Movers",
      description:
        "Seamless international relocation services with Keshav Packers and Movers. Move across borders with expert customs handling and secure transport.",
      keywords:
        "international relocation, global moving, packers and movers, customs clearance, international moving services India",
    },
  },
};

// Generate static paths for each service slug
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = serviceData[slug] || { meta: {} };

  return {
    title:
      service.meta.title || "Service Not Found | Keshav Packers and Movers",
    description: service.meta.description || "Service not found.",
    keywords: service.meta.keywords || "",
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: "website",
      url: `https://keshavpackersmovers.com/services/${slug}`,
      images: [service.image],
    },
  };
}

// Server Component (cannot use client-side hooks)
export default function ServicePage({ params }) {
  const { slug } = params;
  const service = serviceData[slug] || {
    title: "Service Not Found",
    tagline: "",
    image: "",
    content: [],
    meta: {},
  };

  return (
    <div className="relative bg-lightPeach py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[300px] rounded-[12px] overflow-hidden mb-8">
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[12px]"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-20 flex flex-col justify-center items-center text-center p-4 h-full">
            <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              {service.title}
            </h1>
            <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-white mt-2">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {service.content.length > 0 ? (
            service.content.map((section, index) => (
              <div key={index}>
                <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
                  {section.heading}
                </h2>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-textMedium mt-2">
                  {section.description}
                </p>
              </div>
            ))
          ) : (
            <div className="container mx-auto px-4 py-12 text-center">
              <h2 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark">
                Service Not Found
              </h2>
              <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-4">
                The service you&apos;re looking for doesn&apos;t exist. Please check our{" "}
                <Link href="/services" className="text-primary underline">
                  Services
                </Link>
                page.
              </p>
            </div>
          )}
        </div>

        {/* CTA Button - Moved to InlineContactForm (Client Component) */}
        <div className="flex justify-center mt-8">
          <InlineContactForm />
        </div>
      </div>
    </div>
  );
}
