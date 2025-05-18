import Link from "next/link";
import Image from "next/image";
import Accordion from "../../components/Accordion";
import InlineContactForm from "../../components/InlineContactForm";

const serviceData = [
  {
    title: "Home Relocation Services",
    tagline: "Hassle-Free Home Shifting with Expert Care",
    image: "/assets/images/service/home-relocation.jpeg",
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
          "Enjoy affordable pricing, transparent quotes, and exceptional customer support. We offer insurance options for added peace of mind and flexible scheduling to fit your timeline. Whether you’re moving locally or long-distance, we’ve got you covered with professional home relocation services.",
      },
      {
        heading: "Typical Use Cases",
        description:
          "Ideal for small families, individuals, or anyone moving to a new home, whether it's a 1BHK, 2BHK, or 3BHK. Perfect for local moves within the same city or long-distance relocations across India.",
      },
      {
        heading: "Customer Testimonial",
        description:
          "Moving my 2BHK home from Mumbai to Delhi was a breeze with Keshav Packers and Movers. Their team handled everything with care, and I was settled in my new home in no time! – Priya S.",
      },
    ],
    slug: "home-relocation",
  },
  {
    title: "Bike/Car Relocation Services",
    tagline: "Safe and Secure Vehicle Transport Across India",
    image: "/assets/images/service/bike-car-relocation.jpeg",
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
      {
        heading: "Typical Use Cases",
        description:
          "Perfect for individuals relocating to a new city, professionals on temporary assignments, or students moving their vehicles. Suitable for both bikes and cars, whether moving locally or across the country.",
      },
      {
        heading: "Special Features",
        description:
          "We use specialized carriers for vehicles, ensuring maximum safety. Real-time tracking allows you to monitor your vehicle’s journey from pickup to delivery.",
      },
    ],
    slug: "bike-car-relocation",
  },
  {
    title: "Office Relocation Services",
    tagline: "Efficient Office Moves with Minimal Downtime",
    image: "/assets/images/service/office-relocation.jpeg",
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
      {
        heading: "Typical Use Cases",
        description:
          "Ideal for small businesses, startups, or large enterprises relocating to a new office space. Suitable for local moves or interstate relocations with minimal business interruption.",
      },
      {
        heading: "Customer Testimonial",
        description:
          "Keshav Packers and Movers relocated our office in Bengaluru with zero downtime. Their team was professional and efficient, and we were back to work the next day! – Anil K., CEO",
      },
    ],
    slug: "office-relocation",
  },
  {
    title: "Storage Solutions",
    tagline: "Secure and Flexible Storage for Your Belongings",
    image: "/assets/images/service/packing-unpacking.jpeg",
    content: [
      {
        heading: "Why Choose Our Storage Solutions?",
        description:
          "We offer secure, climate-controlled storage options for your belongings, whether you need short-term or long-term solutions. Our facilities are equipped with advanced security systems to keep your items safe.",
      },
      {
        heading: "Our Storage Process",
        description:
          "Request a storage quote, and we’ll help you choose the right plan. We pack and transport your items to our facility, store them securely, and deliver them back when you’re ready. It’s that simple!",
      },
      {
        heading: "Benefits of Our Service",
        description:
          "Our storage solutions are flexible, affordable, and tailored to your needs. We provide 24/7 monitoring, easy access to your items, and competitive pricing, making storage hassle-free and convenient.",
      },
      {
        heading: "Special Features",
        description:
          "Our climate-controlled storage units protect your belongings from humidity and temperature changes, ideal for sensitive items like electronics, artwork, or documents.",
      },
      {
        heading: "Typical Use Cases",
        description:
          "Perfect for individuals or businesses needing temporary storage during a move, renovation, or downsizing. Also ideal for long-term storage of seasonal items or excess inventory.",
      },
    ],
    slug: "storage-solutions",
  },
];

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Our Moving Services | Keshav Packers and Movers",
    description:
      "Discover our range of moving services, including home relocation, bike/car relocation, office moves, and storage solutions with Keshav Packers and Movers across India.",
    keywords:
      "packers and movers services, home relocation India, bike car relocation, office moving, storage solutions India",
    openGraph: {
      title: "Our Moving Services | Keshav Packers and Movers",
      description:
        "Discover our range of moving services with Keshav Packers and Movers across India.",
      type: "website",
      url: "https://keshavpackersmovers.com/services",
    },
  };
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Our Moving Services
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        At Keshav Packers and Movers, we offer a comprehensive range of
        relocation services designed to make your move seamless and stress-free,
        anywhere in India.
      </p>

      {/* Services Overview */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service) => (
          <Link key={service.title} href={`/services/${service.slug}`}>
            <div className="relative h-[200px] rounded-[12px] overflow-hidden group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[12px] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4 group-hover:bg-opacity-50 transition-all duration-300">
                <h3 className="text-[18px] md:text-[20px] font-poppins font-poppinsBold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                  {service.title}
                </h3>
                <p className="text-[14px] font-poppins font-poppinsRegular text-white mt-1">
                  {service.tagline}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Detailed Services Section */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Explore Our Services in Detail
        </h2>
        <div className="space-y-4">
          {serviceData.map((service) => (
            <Accordion
              key={service.title}
              title={service.title}
              content={service.content.map((section) => (
                <div key={section.heading} className="mb-4">
                  <h4 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                    {section.heading}
                  </h4>
                  <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
                    {section.description}
                  </p>
                </div>
              ))}
            />
          ))}
        </div>
      </div>

      {/* Company Overview */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Why Choose Keshav Packers and Movers?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium text-center">
            With over 10 years of trusted relocation services, Keshav Packers
            and Movers has helped thousands of families, individuals, and
            businesses move seamlessly across India. We pride ourselves on our
            commitment to customer satisfaction, transparency, and care in every
            move we undertake.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Nationwide Coverage
              </h3>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                We serve all major cities across India, from Delhi to Chennai,
                Mumbai to Kolkata, and beyond. No matter where you’re moving,
                we’ve got you covered.
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Our Values
              </h3>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                At Keshav Packers and Movers, we prioritize reliability,
                transparency, and customer care. We provide clear pricing,
                dedicated support, and careful handling of your belongings to
                ensure a stress-free experience.
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Expert Team
              </h3>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                Our trained professionals have extensive expertise in handling
                all types of moves, from small apartments to large offices. We
                use modern equipment and techniques to ensure your items are
                safe and secure.
              </p>
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                Certifications & Awards
              </h3>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                We are certified by [Placeholder Organization] and have been
                recognized as a leader in the relocation industry for our
                commitment to excellence.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark text-center mb-4">
              Meet Our Team
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium text-center">
              Our team of dedicated professionals is here to make your move as
              smooth as possible. With years of experience and a passion for
              customer service, we’re committed to delivering exceptional
              results.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href="/about"
                className="bg-gray-700 text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center border-t border-gray-300 pt-8">
        <div className="flex justify-center mt-4 space-x-4">
          <InlineContactForm />
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Keshav Packers and Movers",
            url: "https://keshavpackersmovers.com",
            description:
              "Keshav Packers and Movers offers a range of relocation services, including home relocation, bike/car relocation, office moves, and storage solutions across India.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-123-456-7890",
                contactType: "customer service",
                email: "contact@keshavpackers.com",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
