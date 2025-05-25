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
    alternates: {
      canonical: "https://keshavpackersmovers.com/about",
    },
    openGraph: {
      title: "About Keshav Packers and Movers | Trusted Relocation Services",
      description:
        "Learn more about Keshav Packers and Movers, a trusted relocation service provider.",
      type: "website",
      url: "https://keshavpackersmovers.com/about",
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
              At Keshav Packers and Movers, we understand that moving can be
              stressful—but it doesn&apos;t have to be. Based in the heart of
              Jaipur, we offer fast, secure, and reliable packing and moving
              services designed to make your relocation experience smooth from
              start to finish. Whether you&apos;re shifting your home, office,
              or vehicle, our expert team ensures everything reaches its
              destination safely and on time.
            </p>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
              With years of hands-on experience and a strong local presence,
              Keshav Packers and Movers has built a reputation for trust and
              efficiency in Jaipur and surrounding areas. From careful packing
              to timely delivery, we handle every step with professionalism and
              care—so you can focus on settling into your new space, while we
              take care of the rest.
            </p>
          </div>
          <div className="relative h-[300px] rounded-[12px] overflow-hidden">
            <Image
              src="/assets/images/about-hero.svg"
              alt="Professional team of Keshav Packers and Movers providing reliable moving services across India"
              fill
              style={{ objectFit: "contain" }}
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
              alt="Reliability icon representing trustworthy moving services by Keshav Packers and Movers"
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
              alt="Transparency icon representing clear pricing and honest moving services by Keshav Packers and Movers"
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
              alt="Customer care icon representing dedicated support and service by Keshav Packers and Movers"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
              Customer Care
            </h3>
            <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
              Your satisfaction is our priority—we&apos;re with you every step
              of the way.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/assets/icons/safety-icon.svg"
              alt="Safety icon representing secure handling and protection of belongings by Keshav Packers and Movers"
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
      {/* <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-[12px] self-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] p-4 text-center"
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
      </div> */}

      {/* Certifications and Awards */}
      {/* <div className="mt-12">
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
      </div> */}

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
