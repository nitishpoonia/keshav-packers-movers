import Accordion from "../../components/Accordion";
import InlineContactForm from "../../components/InlineContactForm";
import PricingCalculator from "../../components/PricingCalculator";
import Link from "next/link";

// Pricing data (Estimated Moving Costs)
const pricingData = [
  {
    title: "1BHK Home",
    prices: [
      { distance: "Up to 50km", cost: "₹7,000" },
      { distance: "Up to 110km", cost: "₹9,500" },
      { distance: "Up to 500km", cost: "₹15,000" },
      { distance: "Up to 700km", cost: "₹20,000" },
      { distance: "Across the Country", cost: "₹30,000" },
    ],
  },
  {
    title: "2BHK Home",
    prices: [
      { distance: "Up to 50km", cost: "₹11,000" },
      { distance: "Up to 110km", cost: "₹14,000" },
      { distance: "Up to 500km", cost: "₹22,000" },
      { distance: "Up to 700km", cost: "₹28,000" },
      { distance: "Across the Country", cost: "₹40,000" },
    ],
  },
  {
    title: "3BHK Home",
    prices: [
      { distance: "Up to 50km", cost: "₹15,000" },
      { distance: "Up to 110km", cost: "₹18,000" },
      { distance: "Up to 500km", cost: "₹30,000" },
      { distance: "Up to 700km", cost: "₹38,000" },
      { distance: "Across the Country", cost: "₹55,000" },
    ],
  },
  {
    title: "Bike/Car Relocation",
    prices: [
      { distance: "Up to 50km", cost: "₹3,500" },
      { distance: "Up to 110km", cost: "₹5,000" },
      { distance: "Up to 500km", cost: "₹10,000" },
      { distance: "Up to 700km", cost: "₹12,500" },
      { distance: "Across the Country", cost: "₹18,000" },
    ],
  },
  {
    title: "Office Relocation",
    prices: [
      { distance: "Up to 50km", cost: "₹20,000" },
      { distance: "Up to 110km", cost: "₹25,000" },
      { distance: "Up to 500km", cost: "₹40,000" },
      { distance: "Up to 700km", cost: "₹50,000" },
      { distance: "Across the Country", cost: "₹75,000" },
    ],
  },
];

// Factors affecting pricing
const pricingFactors = [
  {
    factor: "Distance of the Move",
    description:
      "The farther the distance, the higher the cost due to fuel, tolls, and labor. Our pricing table above provides estimates based on distance ranges.",
  },
  {
    factor: "Volume/Weight of Items",
    description:
      "Larger homes (e.g., 3BHK) or heavier items (e.g., furniture, vehicles) require more resources, increasing the cost.",
  },
  {
    factor: "Type of Service",
    description:
      "Different services (e.g., home relocation, bike/car relocation, office relocation) have varying costs due to specialized handling and equipment needs.",
  },
  {
    factor: "Additional Services",
    description:
      "Optional services like packing, unpacking, storage, and insurance add to the base cost. See our additional services pricing below for details.",
  },
  {
    factor: "Time of Year",
    description:
      "Peak moving seasons (e.g., summer, holidays) may have higher rates due to increased demand. Booking in advance can help secure better pricing.",
  },
];

// Additional services pricing
const additionalServices = [
  {
    service: "Packing Services",
    cost: "₹2,000 - ₹5,000 (depending on volume)",
  },
  {
    service: "Unpacking Services",
    cost: "₹1,500 - ₹3,000 (depending on volume)",
  },
  {
    service: "Storage Solutions",
    cost: "₹3,000 per month (per 100 sq.ft.)",
  },
  {
    service: "Insurance Coverage",
    cost: "1% of declared item value",
  },
];

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Pricing for Moving Services | Keshav Packers and Movers",
    description:
      "Explore pricing for home relocation, bike/car relocation, and office moves with Keshav Packers and Movers. Get a free quote for your move across India.",
    keywords:
      "packers and movers pricing India, moving cost calculator, affordable movers cost, Keshav Packers pricing",
    alternates: {
      canonical: "https://keshavpackersmovers.com/pricing",
    },
    openGraph: {
      title: "Pricing for Moving Services | Keshav Packers and Movers",
      description:
        "Explore pricing for home relocation, bike/car relocation, and office moves with Keshav Packers and Movers.",
      type: "website",
      url: "https://keshavpackersmovers.com/pricing",
    },
  };
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
        Pricing for Moving Services
      </h1>
      <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
        We offer transparent pricing for all your relocation needs across India.
        Explore our estimated costs, calculate your move, and request a free
        quote for a personalized estimate.
      </p>

      {/* Estimated Moving Costs */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Estimated Moving Costs
        </h2>
        <div className="space-y-4">
          {pricingData.map((item, index) => (
            <Accordion key={index} title={item.title} prices={item.prices} />
          ))}
        </div>
      </div>

      {/* Factors Affecting Pricing */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Factors Affecting Pricing
        </h2>
        <div className="space-y-6">
          {pricingFactors.map((factor, index) => (
            <div
              key={index}
              className="border-t border-gray-200 pt-4 first:border-t-0"
            >
              <h3 className="text-[16px] md:text-[18px] font-poppins font-poppinsSemiBold text-textDark">
                {factor.factor}
              </h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-2">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Pricing */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Additional Services Pricing
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-t border-gray-200 first:border-t-0"
              >
                <span className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium">
                  {service.service}
                </span>
                <span className="text-[14px] sm:text-[16px] font-poppins font-poppinsBold text-textDark">
                  {service.cost}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Calculator */}
      <div className="mt-12">
        <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark text-center mb-6">
          Estimate Your Moving Cost
        </h2>
        <PricingCalculator
          pricingData={pricingData}
          additionalServices={additionalServices}
        />
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
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+917852000465",
                contactType: "customer service",
                email: "keshavpackersandmovers@gmail.com",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
