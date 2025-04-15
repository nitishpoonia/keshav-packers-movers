import Link from "next/link";
import Image from "next/image";
import InlineContactForm from "../../components/InlineContactForm";

// Team data (placeholder)
const teamData = [
  {
    name: "Ravi Sharma",
    role: "Founder & CEO",
    image: "/assets/images/team/ravi-sharma.jpg",
    description:
      "With over 15 years in the relocation industry, Ravi leads our team with a passion for excellence and customer satisfaction.",
  },
  {
    name: "Anita Patel",
    role: "Operations Manager",
    image: "/assets/images/team/anita-patel.jpg",
    description:
      "Anita ensures every move is executed smoothly, overseeing operations with precision and care.",
  },
  {
    name: "Vikram Singh",
    role: "Logistics Expert",
    image: "/assets/images/team/vikram-singh.jpg",
    description:
      "Vikram specializes in logistics, ensuring your belongings are transported safely and on time.",
  },
  {
    name: "Priya Menon",
    role: "Customer Support Lead",
    image: "/assets/images/team/priya-menon.jpg",
    description:
      "Priya is dedicated to providing exceptional support, answering your queries with a smile.",
  },
];

// Certifications and awards (placeholder)
const certifications = [
  {
    title: "Certified by [Placeholder Organization]",
    description:
      "Recognized for our commitment to quality and customer satisfaction in the relocation industry.",
    icon: "/assets/icons/certification-icon.svg",
  },
  {
    title: "Best Relocation Service 2023",
    description: "Awarded for excellence in relocation services across India.",
    icon: "/assets/icons/award-icon.svg",
  },
  {
    title: "ISO 9001:2015 Certified",
    description:
      "Certified for maintaining high standards in quality management and service delivery.",
    icon: "/assets/icons/iso-icon.svg",
  },
];

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "About Keshav Packers and Movers | Trusted Relocation Services",
    description:
      "Learn more about Keshav Packers and Movers, a trusted relocation service provider with over 10 years of experience across India.",
    keywords:
      "about Keshav Packers, packers and movers India, trusted relocation services, moving company about",
    openGraph: {
      title: "About Keshav Packers and Movers | Trusted Relocation Services",
      description:
        "Learn more about Keshav Packers and Movers, a trusted relocation service provider.",
      type: "website",
      url: "https://yourwebsite.com/about",
    },
  };
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        About Keshav Packers and Movers
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        With over a decade of experience, Keshav Packers and Movers is your
        trusted partner for seamless relocation services across India. Discover
        our story, values, and the team that makes your move effortless.
      </p>

      {/* Company Overview */}
      <div className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark mb-4">
              Our Story
            </h2>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mb-4">
              Founded over 10 years ago, Keshav Packers and Movers started with
              a simple mission: to make relocation stress-free for families and
              businesses across India. What began as a small team in Bengaluru
              has grown into a nationwide operation, serving over 10,000
              customers in more than 100 cities. Our commitment to reliability,
              transparency, and care has earned us the trust of thousands,
              making us a leader in the relocation industry.
            </p>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
              From local moves to long-distance relocations, we’ve handled it
              all—helping families settle into new homes, businesses transition
              to new offices, and individuals transport their vehicles safely.
              At Keshav Packers and Movers, we believe every move is a new
              beginning, and we’re here to make it a smooth one.
            </p>
          </div>
          <div className="relative h-[300px] rounded-[12px] overflow-hidden">
            <Image
              src="/assets/images/about-hero.jpg"
              alt="Keshav Packers and Movers Team"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Our Mission and Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Image
              src="/assets/icons/reliability-icon.svg"
              alt="Reliability Icon"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
              Reliability
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
              We deliver on our promises, ensuring your move is on time and
              hassle-free.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/assets/icons/transparency-icon.svg"
              alt="Transparency Icon"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
              Transparency
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
              Clear pricing with no hidden fees, so you know exactly what to
              expect.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/assets/icons/customer-care-icon.svg"
              alt="Customer Care Icon"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
              Customer Care
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
              Your satisfaction is our priority—we’re with you every step of the
              way.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/assets/icons/safety-icon.svg"
              alt="Safety Icon"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
              Safety
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
              We handle your belongings with the utmost care, using high-quality
              materials.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-[12px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] p-4 text-center"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                {member.name}
              </h3>
              <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium">
                {member.role}
              </p>
              <p className="text-[14px] font-poppins font-poppinsRegular text-textMedium mt-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Awards */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Certifications and Awards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-[12px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] p-4 text-center"
            >
              <Image
                src={cert.icon}
                alt={`${cert.title} Icon`}
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                {cert.title}
              </h3>
              <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center border-t border-gray-300 pt-8">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
          Ready to Start Your Move?
        </h2>
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-2">
          Request a free quote today, or contact us to discuss your relocation
          needs.
        </p>
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
            url: "https://yourwebsite.com",
            description:
              "Keshav Packers and Movers is a trusted relocation service provider with over 10 years of experience, offering moving services across India.",
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
