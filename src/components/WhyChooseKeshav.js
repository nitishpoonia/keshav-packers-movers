import Image from "next/image";

export default function WhyChooseKeshav() {
  // Combined data for all cards
  const cards = [
    {
      icon: "/assets/icons/placeholder-icon4.svg", // Placeholder icon
      title: "Professional Team",
      description: "Experienced staff handle every move with care.",
    },
    {
      icon: "/assets/icons/placeholder-icon5.svg", // Placeholder icon
      title: "Secure Packing",
      description: "We use high-quality materials to protect your belongings.",
    },
    {
      icon: "/assets/icons/placeholder-icon6.svg", // Placeholder icon
      title: "All India Service",
      description: "Reliable moving across every state.",
    },
    {
      icon: "/assets/icons/placeholder-icon1.svg", // Placeholder icon
      title: "Affordable Pricing",
      description:
        "We offer competitive rates with no hidden fees, ensuring your move fits your budget.",
    },
    {
      icon: "/assets/icons/placeholder-icon2.svg",
      title: "Customer Satisfaction",
      description:
        "Your happiness is our top priority, with personalized service to meet your needs.",
    },
    {
      icon: "/assets/icons/placeholder-icon3.svg",
      title: "Timely Delivery",
      description:
        "We guarantee on-time pickups and deliveries, keeping your move on schedule.",
    },
  ];

  return (
    <section className="relative py-12">
      {/* Background Wave Pattern */}
      <div className="absolute inset-x-0 bottom-0 h-[500px]">
        <Image
          className=""
          src="/assets/images/why-choose/wave-pattern2.svg"
          alt="Decorative wave pattern background for Why Choose Keshav Packers section"
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-[26px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-primary text-center">
          Why Choose Keshav Packers and Movers?
        </h2>

        {/* Subheading */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          See why thousands trust us for their relocation needs. From secure
          packing to professional service, we ensure every move is smooth,
          affordable, and stress-free.
        </p>

        {/* All Cards in a Single Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1366px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[400px] h-[130px] mx-auto bg-lightPeach rounded-[12px] p-4 flex items-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
            >
              {/* Icon */}
              <div className="w-[34px] h-[34px] mr-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} feature icon for Keshav Packers and Movers`}
                  width={34}
                  height={34}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-subheading font-poppins font-poppinsBold text-textDark">
                  {card.title}
                </h3>
                <p className="text-[12px] font-poppins font-poppinsRegular text-textMedium mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
